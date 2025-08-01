import type { Album } from './types.js';
import { SearchManager } from './searchManager.js';
import { PaginationManager } from './paginationManager.js';
import { DisplayManager } from './displayManager.js';
import { InteractionManager } from './interactionManager.js';
import config from '../../config';

export class AlbumManager {
  private albums: Album[];
  private filteredAlbums: Album[];
  private searchManager!: SearchManager;
  private paginationManager!: PaginationManager;
  private displayManager!: DisplayManager;
  private interactionManager!: InteractionManager;

  constructor() {
    this.albums = config.albums;
    this.filteredAlbums = [...this.albums];
    
    // 延迟初始化，确保DOM已经加载
    setTimeout(() => {
      // 初始化各个管理器
      this.searchManager = new SearchManager((query: string) => {
        this.handleSearchChange(query);
      });
      
      this.paginationManager = new PaginationManager((page: number) => {
        this.handlePageChange(page);
      });
      
      this.displayManager = new DisplayManager();
      this.interactionManager = new InteractionManager();
      
      // 确保分页管理器有初始数据
      this.paginationManager.updatePagination(this.filteredAlbums, '');
      
      // 初始显示
      this.updateDisplay();
    }, 0);
  }

  private handleSearchChange(query: string): void {
    // 实时过滤相册
    if (!query) {
      // 输入框为空时显示所有相册
      this.filteredAlbums = [...this.albums];
    } else {
      // 有输入值时，实时过滤匹配的相册
      this.filteredAlbums = this.albums.filter(album =>
        album.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    // 重置到第一页
    this.paginationManager.resetToFirstPage();
    
    // 先更新分页，再更新显示
    this.paginationManager.updatePagination(this.filteredAlbums, query);
    this.updateDisplay();
  }

  private handlePageChange(page: number): void {
    this.updateDisplay();
  }

  private updateDisplay(): void {
    // 获取当前页的相册
    const currentAlbums = this.paginationManager.getCurrentPageAlbums();
    
    // 更新显示
    this.displayManager.updateDisplay(currentAlbums, this.searchManager.getSearchQuery());
    
    // 更新搜索结果显示
    this.searchManager.updateSearchResults(this.filteredAlbums.length);
    
    // 重新绑定交互事件
    this.interactionManager.bindAlbumCardEvents();
  }
} 