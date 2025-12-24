class DynamicForm {
  constructor() {
    this.fields = [];
    this.fieldCount = 0;
    this.minFields = 1;
    this.maxFields = 10;
    this.init();
  }

  init() {
    this.cacheElements();
    this.attachEventListeners();
    this.addField();
  }

  cacheElements() {
    this.form = document.getElementById("dynamicForm");
    this.fieldsContainer = document.getElementById("fieldsContainer");
    this.addFieldBtn = document.getElementById("addFieldBtn");
    this.submitBtn = document.getElementById("submitBtn");
    this.resetBtn = document.getElementById("resetBtn");
    this.successMessage = document.getElementById("successMessage");
  }

  attachEventListeners() {
    this.addFieldBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.addField();
    });

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleSubmit();
    });

    this.resetBtn.addEventListener("click", () => {
      setTimeout(() => {
        this.fields = [];
        this.fieldCount = 0;
        this.fieldsContainer.innerHTML = "";
        this.addField();
        this.successMessage.classList.remove("show");
      }, 50);
    });
  }

  addField() {
    if (this.fieldCount >= this.maxFields) {
      alert(`Maximum ${this.maxFields} fields allowed!`);
      return;
    }

    const fieldId = `field-${this.fieldCount}`;
    const fieldNumber = this.fieldCount + 1;

    const fieldHTML = `
                    <div class="form-group" data-field-id="${fieldId}">
                        <div class="field-container">
                            <div class="field-wrapper">
                                <div class="field-number">Field ${fieldNumber}</div>
                                <label class="form-label" for="${fieldId}">
                                    Input Field ${fieldNumber}
                                </label>
                                <input 
                                    type="text" 
                                    id="${fieldId}" 
                                    class="form-input" 
                                    name="field_${fieldNumber}"
                                    placeholder="Enter value for field ${fieldNumber}"
                                    data-field-number="${fieldNumber}"
                                    required
                                />
                                <div class="error-message">This field is required</div>
                            </div>
                            <button 
                                type="button" 
                                class="btn btn-remove" 
                                data-field-id="${fieldId}"
                                title="Remove this field"
                                ${this.fieldCount === 0 ? "disabled" : ""}
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                `;

    this.fieldsContainer.insertAdjacentHTML("beforeend", fieldHTML);

    const fieldElement = document.querySelector(`[data-field-id="${fieldId}"]`);
    const input = fieldElement.querySelector(`#${fieldId}`);
    const removeBtn = fieldElement.querySelector("[data-field-id]");

    input.addEventListener("input", () => this.validateField(input));
    input.addEventListener("blur", () => this.validateField(input));

    removeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.removeField(fieldId);
    });

    this.fields.push({
      id: fieldId,
      number: fieldNumber,
      element: input,
      group: fieldElement,
    });

    this.updateRemoveButtons();
    input.focus();
    this.fieldCount++;
  }

  removeField(fieldId) {
    const fieldElement = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (!fieldElement) return;

    if (this.fields.length <= this.minFields) {
      alert("You must have at least one field!");
      return;
    }

    fieldElement.style.animation = "slideIn 0.2s ease reverse forwards";
    setTimeout(() => {
      fieldElement.remove();
      this.fields = this.fields.filter((f) => f.id !== fieldId);
      this.renumberFields();
      this.updateRemoveButtons();
    }, 200);
  }

  renumberFields() {
    this.fields.forEach((field, index) => {
      const newNumber = index + 1;
      const label = field.group.querySelector(".form-label");
      const numberDiv = field.group.querySelector(".field-number");
      const input = field.element;

      numberDiv.textContent = `Field ${newNumber}`;
      label.textContent = `Input Field ${newNumber}`;
      label.setAttribute("for", `field-${index}`);
      input.placeholder = `Enter value for field ${newNumber}`;
      input.setAttribute("data-field-number", newNumber);
      input.name = `field_${newNumber}`;
    });
  }

  updateRemoveButtons() {
    const removeButtons = document.querySelectorAll(".btn-remove");
    removeButtons.forEach((btn) => {
      btn.disabled = this.fields.length === 1;
      btn.style.opacity = this.fieldCount >= this.maxFields ? "0.7" : "1";
    });

    this.addFieldBtn.disabled = this.fieldCount >= this.maxFields;
  }

  validateField(input) {
    const value = input.value.trim();
    const group = input.closest(".form-group");

    if (!value) {
      group.classList.add("has-error");
      input.classList.add("error");
    } else {
      group.classList.remove("has-error");
      input.classList.remove("error");
    }
  }

  validateForm() {
    let isValid = true;
    this.fields.forEach((field) => {
      this.validateField(field.element);
      if (!field.element.value.trim()) {
        isValid = false;
      }
    });
    return isValid;
  }

  handleSubmit() {
    if (!this.validateForm()) {
      alert("Please fill in all fields!");
      return;
    }

    const formData = {};
    this.fields.forEach((field, index) => {
      formData[`field_${index + 1}`] = field.element.value.trim();
    });

    console.log("Form Data Submitted:", formData);
    console.log("Total Fields:", this.fields.length);
    console.log("Timestamp:", new Date().toLocaleString());

    this.successMessage.classList.add("show");
    setTimeout(() => {
      this.successMessage.classList.remove("show");
    }, 4000);

    this.form.reset();
    this.fields.forEach((field) => {
      field.group.classList.remove("has-error");
      field.element.classList.remove("error");
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new DynamicForm();
});
