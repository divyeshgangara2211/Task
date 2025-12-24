# Dynamic Input Form

## Project Overview
A dynamic form application that allows users to add and remove input fields. Built with HTML, CSS, and JavaScript.

**Student Name:** Divyesh Gangera  

---

## Features
✅ Add new input fields dynamically  
✅ Remove input fields with validation  
✅ Real-time form validation  
✅ Auto-numbering of fields  
✅ Responsive design (mobile & desktop)  
✅ Form submission with data logging  
✅ Clear/Reset functionality  
✅ Error messages for empty fields  

---

## How to Use

1. **Open the Form**
   - Open `index.html` in any web browser

2. **Add Fields**
   - Click "+ Add Input Field" button
   - New field appears automatically
   - Maximum 10 fields allowed

3. **Remove Fields**
   - Click the "✕" button next to any field
   - Minimum 1 field is required
   - Remaining fields renumber automatically

4. **Fill the Form**
   - Enter values in each field
   - Red border shows validation errors
   - Errors clear when valid input is added

5. **Submit Form**
   - Click "Submit Form" button
   - Form validates all fields
   - Data logs to browser console (F12)
   - Success message displays

6. **Clear Form**
   - Click "Clear All" button
   - Form resets to initial state

---

## Project Structure

Technology_Task_1_Divyesh_Gangera/
├── index.html # HTML structure
├── styles.css # CSS styling
├── script.js # JavaScript logic
├── README.md # This file
└── package.json # Package metadata


---

## Form Data Format

When submitted, form data looks like:

{
"field_1": "value1",
"field_2": "value2",
"field_3": "value3"
}


**Check console (F12) to see submitted data.**

---

## Technical Details

### Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Styling with CSS variables
- **JavaScript ES6+** - Form logic and validation
- **No Dependencies** - Pure vanilla JavaScript

### Browser Support
✅ Chrome (latest)  
✅ Firefox (latest)  
✅ Safari (latest)  
✅ Edge (latest)  

### Key Features
- Class-based JavaScript architecture
- Real-time field validation
- Smooth animations on add/remove
- Auto-focus on new fields
- Mobile-responsive design
- Keyboard accessible

---

## Validation Rules

- All fields are required
- Empty fields show error state
- Error messages appear below fields
- Whitespace is trimmed on submission
- Form won't submit if validation fails

---

## Responsive Design

- **Desktop:** Full layout with 2-column buttons
- **Tablet:** Optimized spacing
- **Mobile:** Single-column layout, full-width fields

---

## Files Description

| File | Size | Purpose |
|------|------|---------|
| `index.html` | ~2.5 KB | HTML structure and form elements |
| `styles.css` | ~6 KB | All styling and responsive design |
| `script.js` | ~5 KB | Form logic and interactivity |
| `README.md` | - | Project documentation |
| `package.json` | - | Package metadata |

---

## How to Test

1. **Add Fields Test**
   - Click "+ Add Input Field" button multiple times
   - Verify fields appear with correct numbering

2. **Remove Fields Test**
   - Click "✕" button on each field
   - Verify remaining fields renumber
   - Check that remove is disabled with 1 field

3. **Validation Test**
   - Try to submit empty form
   - Verify error messages appear
   - Fill fields and verify errors disappear

4. **Submission Test**
   - Fill all fields
   - Click "Submit Form"
   - Open browser console (F12)
   - Check data is logged correctly

5. **Reset Test**
   - Click "Clear All"
   - Verify form resets to initial state

---

## Keyboard Navigation

- **Tab** - Move between fields and buttons
- **Enter** - Submit form or add new field
- **Space** - Activate focused button

---

## Color Scheme

- **Primary Color:** Teal (#208C8D)
- **Error Color:** Red (#C01547)
- **Background:** Cream (#FCFCF9)
- **Text:** Dark Slate (#133C3B)

---

## Future Enhancements

- Different input types (email, number, date)
- Custom field labels
- Data persistence with localStorage
- Backend API integration
- Drag and drop field reordering
- Export data as JSON/CSV

---

## Notes

- Form data is logged to browser console
- No external libraries or dependencies
- Single-file HTML option available
- Ready for backend integration
- MERN stack compatible

---

## Support

For any issues:
1. Check browser console (F12) for logs
2. Test with different input values
3. Try different screen sizes
4. Verify all files are in same folder

---

**Submitted by:** Divyesh Gangera  
**Task:** Build a dynamic form that adds and removes input fields  
**Status:** ✅ Complete and Ready for Submission
