// Dummy data
const dummyUsers = Array.from({ length: 57 }).map((_, index) => {
  const id = index + 1;
  return {
    id,
    name: `User ${id}`,
    email: `user${id}@example.com`,
    role: id % 3 === 0 ? 'Admin' : id % 2 === 0 ? 'Editor' : 'Viewer'
  };
});

class TablePagination {
  constructor(data) {
    this.data = data;
    this.currentPage = 1;
    this.pageSize = 5;
    this.totalPages = Math.ceil(this.data.length / this.pageSize);

    this.tableBody = document.getElementById('tableBody');
    this.rowsInfo = document.getElementById('rowsInfo');
    this.pageSizeSelect = document.getElementById('pageSizeSelect');

    this.prevBtn = document.getElementById('prevBtn');
    this.nextBtn = document.getElementById('nextBtn');
    this.paginationPages = document.getElementById('paginationPages');

    this.init();
  }

  init() {
    this.attachEventListeners();
    this.update();
  }

  attachEventListeners() {
    this.prevBtn.addEventListener('click', () => {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.update();
      }
    });

    this.nextBtn.addEventListener('click', () => {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.update();
      }
    });

    this.pageSizeSelect.addEventListener('change', (e) => {
      this.pageSize = parseInt(e.target.value, 10) || 5;
      this.totalPages = Math.ceil(this.data.length / this.pageSize);
      this.currentPage = 1;
      this.update();
    });

    // Keyboard navigation: Left/Right arrows
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        if (this.currentPage > 1) {
          this.currentPage--;
          this.update();
        }
      }
      if (e.key === 'ArrowRight') {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
          this.update();
        }
      }
    });
  }

  update() {
    this.renderTable();
    this.renderPagination();
    this.updateFooter();
  }

  getPageData() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.data.slice(startIndex, endIndex);
  }

  renderTable() {
    const pageData = this.getPageData();
    this.tableBody.innerHTML = '';

    pageData.forEach((user) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.role}</td>
      `;
      this.tableBody.appendChild(tr);
    });
  }

  updateFooter() {
    if (this.data.length === 0) {
      this.rowsInfo.textContent = 'Showing 0 to 0 of 0 entries';
      return;
    }

    const start = (this.currentPage - 1) * this.pageSize + 1;
    const end = Math.min(this.currentPage * this.pageSize, this.data.length);
    this.rowsInfo.textContent = `Showing ${start} to ${end} of ${this.data.length} entries`;

    this.prevBtn.disabled = this.currentPage === 1;
    this.nextBtn.disabled = this.currentPage === this.totalPages;
  }

  // Build pagination pages: previous/next + three middle buttons + ellipsis
  renderPagination() {
    this.paginationPages.innerHTML = '';

    const pages = this.buildPageList();

    pages.forEach((item) => {
      if (item.type === 'page') {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'pagination-page';
        btn.textContent = item.page;
        if (item.page === this.currentPage) {
          btn.classList.add('active');
          btn.setAttribute('aria-current', 'page');
        }
        btn.addEventListener('click', () => {
          this.currentPage = item.page;
          this.update();
        });
        this.paginationPages.appendChild(btn);
      } else if (item.type === 'ellipsis') {
        const span = document.createElement('span');
        span.className = 'pagination-ellipsis';
        span.textContent = '…';
        this.paginationPages.appendChild(span);
      }
    });
  }

  /**
   * Returns an array representing pagination:
   * Always show first and last page.
   * Show current page with up to 1 neighbor on each side.
   * Use ellipsis when ranges are skipped.
   */
  buildPageList() {
    const total = this.totalPages;
    const current = this.currentPage;
    const pages = [];

    if (total <= 7) {
      // Small number of pages: show all
      for (let p = 1; p <= total; p++) {
        pages.push({ type: 'page', page: p });
      }
      return pages;
    }

    // Always show first page
    pages.push({ type: 'page', page: 1 });

    const left = Math.max(2, current - 1);
    const right = Math.min(total - 1, current + 1);

    // Left ellipsis
    if (left > 2) {
      pages.push({ type: 'ellipsis' });
    }

    // Middle pages (up to three: current, and neighbors)
    for (let p = left; p <= right; p++) {
      pages.push({ type: 'page', page: p });
    }

    // Right ellipsis
    if (right < total - 1) {
      pages.push({ type: 'ellipsis' });
    }

    // Last page
    pages.push({ type: 'page', page: total });

    return pages;
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new TablePagination(dummyUsers);
});
