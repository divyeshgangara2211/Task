// State management
const state = {
    selectedFile: null,
    isDragging: false
};

// DOM elements
const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');
const previewSection = document.getElementById('previewSection');
const previewImage = document.getElementById('previewImage');
const fileName = document.getElementById('fileName');
const fileSize = document.getElementById('fileSize');
const fileType = document.getElementById('fileType');
const imageDimensions = document.getElementById('imageDimensions');
const uploadBtn = document.getElementById('uploadBtn');
const clearBtn = document.getElementById('clearBtn');
const successAlert = document.getElementById('successAlert');
const errorAlert = document.getElementById('errorAlert');
const warningAlert = document.getElementById('warningAlert');

// File configuration
const config = {
    maxSize: 5 * 1024 * 1024, // 5MB
    allowedTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
    allowedExtensions: ['.jpg', '.jpeg', '.png', '.gif', '.webp']
};

// Event listeners for drag and drop
uploadArea.addEventListener('click', () => fileInput.click());

uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
    uploadArea.classList.add('drag-over');
    state.isDragging = true;
});

uploadArea.addEventListener('dragleave', (e) => {
    e.preventDefault();
    e.stopPropagation();
    uploadArea.classList.remove('drag-over');
    state.isDragging = false;
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
    uploadArea.classList.remove('drag-over');
    state.isDragging = false;

    const files = e.dataTransfer.files;
    if (files.length > 0) {
        handleFileSelect(files[0]);
    }
});

// File input change event
fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
        handleFileSelect(e.target.files[0]);
    }
});

// Handle file selection
function handleFileSelect(file) {
    clearAlerts();

    // Validate file type
    if (!config.allowedTypes.includes(file.type)) {
        showError(`Invalid file type. Allowed types: ${config.allowedExtensions.join(', ')}`);
        fileInput.value = '';
        return;
    }

    // Validate file size
    if (file.size > config.maxSize) {
        const maxMB = config.maxSize / (1024 * 1024);
        showError(`File size exceeds ${maxMB}MB limit`);
        fileInput.value = '';
        return;
    }

    state.selectedFile = file;
    displayPreview(file);
}

// Display image preview
function displayPreview(file) {
    const reader = new FileReader();

    reader.onload = (e) => {
        previewImage.src = e.target.result;
        previewImage.onload = () => {
            updateImageInfo(file, previewImage);
            previewSection.classList.add('active');
        };
    };

    reader.readAsDataURL(file);
}

// Update image information
function updateImageInfo(file, img) {
    fileName.textContent = file.name;
    fileSize.textContent = formatFileSize(file.size);
    fileType.textContent = file.type || 'Unknown';
    imageDimensions.textContent = `${img.naturalWidth} × ${img.naturalHeight}px`;
}

// Format file size
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

// Upload handler
uploadBtn.addEventListener('click', () => {
    if (!state.selectedFile) {
        showWarning('Please select an image first');
        return;
    }

    // Simulate upload (in real MERN app, send to backend)
    uploadBtn.disabled = true;
    uploadBtn.textContent = 'Uploading...';

    // Simulate API call
    setTimeout(() => {
        showSuccess(`Image "${state.selectedFile.name}" uploaded successfully!`);
        uploadBtn.disabled = false;
        uploadBtn.textContent = 'Upload Image';
        // In production, you would reset the form here
        // clearForm();
    }, 1500);
});

// Clear handler
clearBtn.addEventListener('click', clearForm);

function clearForm() {
    state.selectedFile = null;
    fileInput.value = '';
    previewSection.classList.remove('active');
    clearAlerts();
}

// Alert functions
function showSuccess(message) {
    successAlert.textContent = message;
    successAlert.classList.add('active');
    setTimeout(() => successAlert.classList.remove('active'), 4000);
}

function showError(message) {
    errorAlert.textContent = '❌ ' + message;
    errorAlert.classList.add('active');
    setTimeout(() => errorAlert.classList.remove('active'), 4000);
}

function showWarning(message) {
    warningAlert.textContent = '⚠️ ' + message;
    warningAlert.classList.add('active');
    setTimeout(() => warningAlert.classList.remove('active'), 4000);
}

function clearAlerts() {
    successAlert.classList.remove('active');
    errorAlert.classList.remove('active');
    warningAlert.classList.remove('active');
}
