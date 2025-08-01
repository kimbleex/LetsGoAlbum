import config from '../../config';
import type { Album } from './types.js';

export class SearchManager {
  private albums: Album[];
  private searchInput: HTMLInputElement | null = null;
  private clearSearchBtn: HTMLButtonElement | null = null;
  private searchSuggestions: HTMLDivElement | null = null;
  private searchResultTip: HTMLDivElement | null = null;
  private searchResultText: HTMLSpanElement | null = null;
  private clearSearchBtn2: HTMLButtonElement | null = null;
  private showAllAlbums: HTMLButtonElement | null = null;
  private searchQuery: string = '';
  private onSearchChange: (query: string) => void;

  constructor(onSearchChange: (query: string) => void) {
    this.albums = config.albums;
    this.onSearchChange = onSearchChange;
    this.initElements();
    this.bindEvents();
  }

  private initElements(): void {
    this.searchInput = document.getElementById('search-input') as HTMLInputElement;
    this.clearSearchBtn = document.getElementById('clear-search') as HTMLButtonElement;
    this.searchSuggestions = document.getElementById('search-suggestions') as HTMLDivElement;
    this.searchResultTip = document.getElementById('search-result-tip') as HTMLDivElement;
    this.searchResultText = document.getElementById('search-result-text') as HTMLSpanElement;
    this.clearSearchBtn2 = document.getElementById('clear-search-btn') as HTMLButtonElement;
    this.showAllAlbums = document.getElementById('show-all-albums') as HTMLButtonElement;
  }

  private bindEvents(): void {
    // 搜索输入事件 - 实时搜索
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.searchQuery = (e.target as HTMLInputElement).value.trim();
        this.showSearchSuggestions();
        this.onSearchChange(this.searchQuery);
      });

      // 添加键盘导航支持
      this.searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.hideSearchSuggestions();
          this.searchInput?.blur();
        }
      });

      // 搜索框聚焦事件
      this.searchInput.addEventListener('focus', () => {
        if (this.searchQuery) {
          this.showSearchSuggestions();
        }
      });

      // 搜索框失焦事件
      this.searchInput.addEventListener('blur', () => {
        // 延迟隐藏建议框，以便用户能够点击建议项
        setTimeout(() => {
          this.hideSearchSuggestions();
        }, 200);
      });
    }

    // 点击外部关闭建议框
    document.addEventListener('click', (e) => {
      if (this.searchInput && this.searchSuggestions) {
        if (!this.searchInput.contains(e.target as Node) && !this.searchSuggestions.contains(e.target as Node)) {
          this.hideSearchSuggestions();
        }
      }
    });

    // 清除搜索按钮
    if (this.clearSearchBtn) {
      this.clearSearchBtn.addEventListener('click', () => {
        this.clearSearch();
      });
    }

    if (this.clearSearchBtn2) {
      this.clearSearchBtn2.addEventListener('click', () => {
        this.clearSearch();
      });
    }

    // 显示所有相册按钮
    if (this.showAllAlbums) {
      this.showAllAlbums.addEventListener('click', () => {
        this.clearSearch();
      });
    }
  }

  private showSearchSuggestions(): void {
    if (!this.searchSuggestions) {
      return;
    }

    // 如果没有搜索查询，隐藏建议框
    if (!this.searchQuery) {
      this.hideSearchSuggestions();
      return;
    }

    const suggestions = this.albums
      .filter(album => album.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
      .slice(0, 5);

    if (suggestions.length === 0) {
      this.hideSearchSuggestions();
      return;
    }

    this.searchSuggestions.innerHTML = suggestions
      .map(album => `
        <div class="suggestion-item px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0" data-title="${album.title}">
          <div class="flex items-center">
            <svg class="w-4 h-4 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <span class="text-gray-700">${this.highlightText(album.title, this.searchQuery)}</span>
          </div>
        </div>
      `)
      .join('');

    this.searchSuggestions.classList.remove('hidden');

    // 绑定建议项点击事件
    this.searchSuggestions.querySelectorAll('.suggestion-item').forEach(item => {
      item.addEventListener('click', () => {
        const title = (item as HTMLElement).dataset.title;
        if (title && this.searchInput) {
          this.searchInput.value = title;
          this.searchQuery = title;
          this.hideSearchSuggestions();
          this.onSearchChange(this.searchQuery);
        }
      });
    });
  }

  private hideSearchSuggestions(): void {
    if (this.searchSuggestions) {
      this.searchSuggestions.classList.add('hidden');
    }
  }

  private highlightText(text: string, query: string): string {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark class="bg-yellow-200 px-1 rounded">$1</mark>');
  }

  private clearSearch(): void {
    if (this.searchInput) {
      this.searchInput.value = '';
    }
    this.searchQuery = '';
    this.hideSearchSuggestions();
    this.onSearchChange(this.searchQuery);
  }

  public updateSearchResults(filteredCount: number): void {
    if (this.searchQuery) {
      // 有搜索查询时显示结果提示
      if (this.searchResultTip) {
        this.searchResultTip.classList.remove('hidden');
      }
      if (this.searchResultText) {
        this.searchResultText.textContent = `搜索 "${this.searchQuery}" 的结果：${filteredCount} 个相册`;
      }
      if (this.clearSearchBtn) {
        this.clearSearchBtn.classList.remove('hidden');
      }
    } else {
      // 没有搜索查询时隐藏结果提示
      if (this.searchResultTip) {
        this.searchResultTip.classList.add('hidden');
      }
      if (this.clearSearchBtn) {
        this.clearSearchBtn.classList.add('hidden');
      }
    }
  }

  public getSearchQuery(): string {
    return this.searchQuery;
  }
} 