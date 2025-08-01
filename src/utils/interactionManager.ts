import type { Album } from './types.js';

export class InteractionManager {
  private albums: Album[];

  constructor(albums: Album[]) {
    this.albums = albums;
  }

  public bindAlbumCardEvents(): void {
    // 重新绑定相册卡片的轮播和预览事件
    const albums = document.querySelectorAll('[data-album-id]');
    
    albums.forEach(album => {
      const albumId = album.getAttribute('data-album-id');
      const albumContainer = album.closest('.bg-white');
      if (!albumContainer) return;
      
      const images = albumContainer.querySelectorAll('[data-image-index]');
      const prevBtn = albumContainer.querySelector('[data-direction="prev"]');
      const nextBtn = albumContainer.querySelector('[data-direction="next"]');
      const previewBtn = albumContainer.querySelector('[data-action="preview"]');
      
      let currentIndex = 0;
      
      function showImage(index: number) {
        images.forEach((img, i) => {
          if (i === index) {
            img.classList.remove('opacity-0');
            img.classList.add('opacity-100');
          } else {
            img.classList.remove('opacity-100');
            img.classList.add('opacity-0');
          }
        });
      }
      
      function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
      }
      
      function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
      }
      
      if (prevBtn) {
        prevBtn.addEventListener('click', prevImage);
      }
      
      if (nextBtn) {
        nextBtn.addEventListener('click', nextImage);
      }
      
      // 预览功能
      if (previewBtn && albumId) {
        previewBtn.addEventListener('click', () => {
          const albumData = this.albums.find(a => a.id === albumId);
          if (albumData) {
            this.openPreview(albumData, currentIndex);
          }
        });
      }
      
      // 鼠标悬停时显示按钮
      albumContainer.addEventListener('mouseenter', function() {
        if (prevBtn) prevBtn.classList.remove('opacity-0');
        if (nextBtn) nextBtn.classList.remove('opacity-0');
        if (previewBtn) previewBtn.classList.remove('opacity-0');
      });
      
      albumContainer.addEventListener('mouseleave', function() {
        if (prevBtn) prevBtn.classList.add('opacity-0');
        if (nextBtn) nextBtn.classList.add('opacity-0');
        if (previewBtn) previewBtn.classList.add('opacity-0');
      });
    });
  }

  private openPreview(album: Album, startIndex: number): void {
    // 移除已存在的模态框
    const existingModal = document.getElementById('preview-modal');
    if (existingModal) {
      document.body.removeChild(existingModal);
    }
    
    // 创建预览模态框
    const modal = document.createElement('div');
    modal.id = 'preview-modal';
    modal.className = 'fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center';
    
    modal.innerHTML = `
      <div class="relative w-full h-full flex items-center justify-center">
        <button class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10" id="close-preview">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
        <div class="relative max-w-7xl max-h-full p-4">
          <img id="preview-image" src="${album.images[startIndex]}" alt="${album.title} - 图片 ${startIndex + 1}" class="max-w-full max-h-full object-contain">
          
          <div class="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white p-3 rounded">
            <h3 class="text-lg font-semibold">${album.title}</h3>
            <p class="text-sm opacity-90">${album.description}</p>
            <div class="flex items-center justify-between mt-2">
              <span class="text-xs">📍 ${album.location}</span>
              <span class="text-xs">${startIndex + 1} / ${album.images.length}</span>
            </div>
          </div>
        </div>
        
        ${album.images.length > 1 ? `
          <button class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10" id="preview-prev">
            <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10" id="preview-next">
            <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        ` : ''}
      </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    let currentPreviewIndex = startIndex;
    const previewImage = modal.querySelector('#preview-image') as HTMLImageElement;
    const counter = modal.querySelector('.text-xs:last-child');
    
    function updatePreviewImage() {
      if (previewImage && counter) {
        previewImage.src = album.images[currentPreviewIndex];
        previewImage.alt = `${album.title} - 图片 ${currentPreviewIndex + 1}`;
        counter.textContent = `${currentPreviewIndex + 1} / ${album.images.length}`;
      }
    }
    
    function nextPreview() {
      currentPreviewIndex = (currentPreviewIndex + 1) % album.images.length;
      updatePreviewImage();
    }
    
    function prevPreview() {
      currentPreviewIndex = (currentPreviewIndex - 1 + album.images.length) % album.images.length;
      updatePreviewImage();
    }
    
    function closePreview() {
      if (document.body.contains(modal)) {
        document.body.removeChild(modal);
      }
      document.body.style.overflow = 'auto';
      // 移除键盘事件监听器
      document.removeEventListener('keydown', handleKeydown);
    }
    
    // 绑定事件
    const closeBtn = modal.querySelector('#close-preview');
    if (closeBtn) {
      closeBtn.addEventListener('click', closePreview);
    }
    
    if (album.images.length > 1) {
      const prevBtn = modal.querySelector('#preview-prev');
      const nextBtn = modal.querySelector('#preview-next');
      if (prevBtn) {
        prevBtn.addEventListener('click', prevPreview);
      }
      if (nextBtn) {
        nextBtn.addEventListener('click', nextPreview);
      }
    }
    
    // 点击背景关闭
    modal.addEventListener('click', (e: Event) => {
      if (e.target === modal) {
        closePreview();
      }
    });
    
    // 键盘快捷键
    const handleKeydown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          closePreview();
          break;
        case 'ArrowLeft':
          if (album.images.length > 1) prevPreview();
          break;
        case 'ArrowRight':
          if (album.images.length > 1) nextPreview();
          break;
      }
    };
    
    document.addEventListener('keydown', handleKeydown);
  }
} 