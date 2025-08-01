import config from '../../config';
import type { Album } from './types.js';

export class PaginationManager {
  private albumsPerPage: number = 4;
  private currentPage: number = 1;
  private filteredAlbums: Album[] = [];
  private pagination: HTMLDivElement | null = null;
  private pageNumbers: HTMLDivElement | null = null;
  private prevPage: HTMLButtonElement | null = null;
  private nextPage: HTMLButtonElement | null = null;
  private paginationInfo: HTMLDivElement | null = null;
  private pageInfoText: HTMLSpanElement | null = null;
  private onPageChange: (page: number) => void;

  constructor(onPageChange: (page: number) => void) {
    this.onPageChange = onPageChange;
    this.initElements();
    this.bindEvents();
  }

  private initElements(): void {
    this.pagination = document.getElementById('pagination') as HTMLDivElement;
    this.pageNumbers = document.getElementById('page-numbers') as HTMLDivElement;
    this.prevPage = document.getElementById('prev-page') as HTMLButtonElement;
    this.nextPage = document.getElementById('next-page') as HTMLButtonElement;
    this.paginationInfo = document.getElementById('pagination-info') as HTMLDivElement;
    this.pageInfoText = document.getElementById('page-info-text') as HTMLSpanElement;
  }

  private bindEvents(): void {
    if (this.prevPage) {
      this.prevPage.addEventListener('click', () => {
        this.goToPage(this.currentPage - 1);
      });
    }

    if (this.nextPage) {
      this.nextPage.addEventListener('click', () => {
        this.goToPage(this.currentPage + 1);
      });
    }
  }

  public updatePagination(filteredAlbums: Album[], searchQuery: string = ''): void {
    this.filteredAlbums = filteredAlbums;
    const totalPages = Math.ceil(this.filteredAlbums.length / this.albumsPerPage);

    if (totalPages > 1) {
      if (this.pagination) {
        this.pagination.classList.remove('hidden');
      }
      if (this.paginationInfo) {
        this.paginationInfo.classList.remove('hidden');
      }
      
      // 生成页码按钮
      if (this.pageNumbers) {
        this.pageNumbers.innerHTML = Array.from({ length: totalPages }, (_, i) => i + 1)
          .map(page => {
            const isCurrentPage = page === this.currentPage;
            return `
              <button
                class="page-btn px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  isCurrentPage
                    ? 'text-white bg-blue-600 border border-blue-600'
                    : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 hover:text-gray-700'
                }"
                data-page="${page}"
              >
                ${page}
              </button>
            `;
          })
          .join('');

        // 绑定页码按钮事件
        this.pageNumbers.querySelectorAll('.page-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            this.goToPage(parseInt((btn as HTMLElement).dataset.page || '1'));
          });
        });
      }

      // 更新分页信息
      if (this.pageInfoText) {
        this.pageInfoText.textContent = `第 ${this.currentPage} 页，共 ${totalPages} 页${searchQuery ? `（搜索：${searchQuery}）` : ''}`;
      }

      // 更新上一页/下一页按钮状态
      if (this.prevPage) {
        this.prevPage.disabled = this.currentPage === 1;
        this.prevPage.classList.toggle('opacity-50', this.currentPage === 1);
      }
      if (this.nextPage) {
        this.nextPage.disabled = this.currentPage === totalPages;
        this.nextPage.classList.toggle('opacity-50', this.currentPage === totalPages);
      }
    } else {
      if (this.pagination) {
        this.pagination.classList.add('hidden');
      }
      if (this.paginationInfo) {
        this.paginationInfo.classList.add('hidden');
      }
    }
  }

  private goToPage(page: number): void {
    const totalPages = Math.ceil(this.filteredAlbums.length / this.albumsPerPage);
    if (page >= 1 && page <= totalPages) {
      this.currentPage = page;
      this.onPageChange(page);
    }
  }

  public getCurrentPage(): number {
    return this.currentPage;
  }

  public getAlbumsPerPage(): number {
    return this.albumsPerPage;
  }

  public resetToFirstPage(): void {
    this.currentPage = 1;
  }

  public getCurrentPageAlbums(): Album[] {
    const startIndex = (this.currentPage - 1) * this.albumsPerPage;
    const endIndex = startIndex + this.albumsPerPage;
    return this.filteredAlbums.slice(startIndex, endIndex);
  }
} 