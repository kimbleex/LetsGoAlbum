import config from '../../config';
import type { Album } from './types.js';

export class DisplayManager {
  private albumsGrid: HTMLDivElement | null = null;
  private noResults: HTMLDivElement | null = null;
  private noResultsText: HTMLParagraphElement | null = null;
  private albumCount: HTMLSpanElement | null = null;

  constructor() {
    this.initElements();
  }

  private initElements(): void {
    this.albumsGrid = document.getElementById('albums-grid') as HTMLDivElement;
    this.noResults = document.getElementById('no-results') as HTMLDivElement;
    this.noResultsText = document.getElementById('no-results-text') as HTMLParagraphElement;
    this.albumCount = document.getElementById('album-count') as HTMLSpanElement;
  }

  public updateDisplay(albums: Album[], searchQuery: string = ''): void {
    if (albums.length > 0 && this.albumsGrid) {
      this.albumsGrid.innerHTML = albums
        .map(album => `
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
            <div class="relative">
              <div class="relative h-80 overflow-hidden">
                ${album.images.map((image, index) => `
                  <div class="absolute inset-0 transition-opacity duration-500 ${index === 0 ? 'opacity-100' : 'opacity-0'}" data-image-index="${index}">
                    <img src="${image}" alt="${album.title} - 图片 ${index + 1}" class="w-full h-full object-cover" loading="lazy">
                  </div>
                `).join('')}
                
                <div class="absolute top-3 right-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                  📍 ${album.location}
                </div>
                
                ${album.images.length > 1 ? `
                  <div class="absolute bottom-3 right-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                    ${album.images.length} 张图片
                  </div>
                ` : ''}
                
                <button class="absolute top-3 left-3 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200 opacity-0 group-hover:opacity-100" data-album-id="${album.id}" data-action="preview">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                  </svg>
                </button>
                
                ${album.images.length > 1 ? `
                  <button class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200 opacity-0 group-hover:opacity-100" data-album-id="${album.id}" data-direction="prev">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                  </button>
                  <button class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200 opacity-0 group-hover:opacity-100" data-album-id="${album.id}" data-direction="next">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                ` : ''}
              </div>
            </div>
            
            <div class="p-4">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-lg font-semibold text-gray-800">${album.title}</h3>
                <span class="text-sm text-gray-500">${album.date}</span>
              </div>
              <p class="text-gray-600 text-sm leading-relaxed">${album.description}</p>
            </div>
          </div>
        `)
        .join('');

      this.albumsGrid.classList.remove('hidden');
      if (this.noResults) {
        this.noResults.classList.add('hidden');
      }
    } else {
      if (this.albumsGrid) {
        this.albumsGrid.classList.add('hidden');
      }
      if (this.noResults) {
        this.noResults.classList.remove('hidden');
        if (this.noResultsText) {
          this.noResultsText.textContent = searchQuery 
            ? `没有找到包含 "${searchQuery}" 的相册`
            : '暂时没有相册';
        }
      }
    }

    // 更新相册数量
    if (this.albumCount) {
      this.albumCount.textContent = config.albums.length.toString();
    }
  }
} 