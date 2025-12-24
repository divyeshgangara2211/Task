# Calculator

## Project Overview
A professional calculator component that performs basic arithmetic operations. Built with reusable button components using HTML5, CSS3, and vanilla JavaScript.

**Task:** Create a simple calculator component that performs basic arithmetic operations and use reusable common component for the button.

**Student Name:** Divyesh Gangera  
**Date:** December 24, 2025

---

## Features
✅ Basic arithmetic operations (+, -, *, /)  
✅ Reusable button components  
✅ Clear (C) and Reset (AC) functionality  
✅ Decimal point support  
✅ Keyboard support  
✅ Display calculation history  
✅ Responsive design (mobile & desktop)  
✅ Visual feedback on operations  

---

## How to Use

1. **Open the Calculator**
   - Open `index.html` in any web browser

2. **Enter Numbers**
   - Click number buttons (0-9)
   - Numbers appear on the display
   - Use decimal point (.) for decimals

3. **Perform Operations**
   - Click operation buttons (+, -, *, /)
   - Enter the second number
   - Click = to calculate result
   - Result shows on display

4. **Clear Functions**
   - **C** - Clear current input
   - **AC** - Reset all (clear everything)

5. **Keyboard Support**
   - **Numbers:** 0-9
   - **Operations:** +, -, *, /
   - **Clear:** Backspace or Delete
   - **Equals:** Enter or =

---

## Project Structure

```
Task_2_Calculator/
├── index.html       # HTML structure
├── styles.css       # CSS styling
├── script.js        # JavaScript logic
├── README.md        # This file
└── package.json     # Package metadata
```

---

## Component Architecture

### Reusable Button Component

The calculator uses reusable button components for:
- **Number Buttons** (0-9)
- **Operation Buttons** (+, -, *, /)
- **Equals Button** (=)
- **Clear Button** (C)
- **Reset Button** (AC)
- **Decimal Button** (.)

**Button Types:**
```
.btn-number   - Number input buttons
.btn-operator - Operation buttons (+, -, *, /)
.btn-equals   - Calculation button
.btn-clear    - Clear current input
.btn-reset    - Reset all
.btn-decimal  - Decimal point
```

---

## Calculator Logic

### State Management
```javascript
{
  display: "0",           // What user sees
  previousValue: 0,       // First number
  currentValue: "0",      // Second number
  operation: null,        // Current operation
  shouldResetDisplay: false
}
```

### Operations
- **Addition (+):** previousValue + currentValue
- **Subtraction (-):** previousValue - currentValue
- **Multiplication (*):** previousValue * currentValue
- **Division (/):** previousValue / currentValue

---

## Calculation Flow

```
1. User clicks number → Display shows number
2. User clicks operator → Store number, wait for next
3. User clicks number → Display shows new number
4. User clicks = → Calculate and display result
5. User can continue with result
```

---

## Form Data Format

Calculator processes:
```javascript
{
  "operation": "+",
  "firstNumber": 10,
  "secondNumber": 5,
  "result": 15,
  "timestamp": "12/24/2025, 5:33:45 PM"
}
```

**Check console (F12) to see calculation logs.**

---

## Technical Details

### Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Styling with CSS variables
- **JavaScript ES6+** - Calculator logic
- **No Dependencies** - Pure vanilla JavaScript

### Browser Support
✅ Chrome (latest)  
✅ Firefox (latest)  
✅ Safari (latest)  
✅ Edge (latest)  

### Key Features
- Class-based JavaScript architecture
- Reusable button component system
- Real-time display updates
- Keyboard event handling
- Division by zero protection
- Decimal precision handling

---

## Button Component System

### CSS Classes

```css
.btn              /* Base button style */
.btn-number       /* Number buttons (0-9) */
.btn-operator     /* Operation buttons */
.btn-equals       /* Equals button */
.btn-clear        /* Clear button */
.btn-reset        /* Reset button */
.btn-decimal      /* Decimal button */
```

### Component Reusability

Each button uses the same base styles with specific modifiers:
- **Color:** Different colors for different button types
- **Size:** Consistent sizing with flex layout
- **Hover State:** Visual feedback on hover
- **Active State:** Pressed button feedback

---

## Validation & Error Handling

- **Division by Zero:** Shows error message
- **Invalid Input:** Prevents invalid characters
- **Decimal Precision:** Limits decimal places
- **Display Overflow:** Scrolls or abbreviates long numbers

---

## Keyboard Navigation

| Key | Action |
|-----|--------|
| 0-9 | Input number |
| + | Addition |
| - | Subtraction |
| * | Multiplication |
| / | Division |
| Enter | Calculate |
| = | Calculate |
| Backspace | Delete last digit |
| Delete | Clear current |
| c/C | Clear current |
| a/A | Reset all |

---

## Color Scheme

- **Primary Color:** Teal (#208C8D)
- **Operator Color:** Orange (#E68161)
- **Equals Color:** Green (#208C8D)
- **Clear Color:** Red (#C01547)
- **Display:** Dark Slate (#133C3B)
- **Background:** Cream (#FCFCF9)

---

## Responsive Design

- **Desktop:** 4x5 button grid, large display
- **Tablet:** Optimized spacing
- **Mobile:** Single-column layout, full-width buttons

---

## Files Description

| File | Size | Purpose |
|------|------|---------|
| `index.html` | ~2 KB | HTML structure |
| `styles.css` | ~5 KB | Calculator styling |
| `script.js` | ~4 KB | Calculator logic |
| `README.md` | - | Documentation |
| `package.json` | - | Package metadata |

---

## How to Test

1. **Basic Operations Test**
   - 5 + 3 = 8
   - 10 - 4 = 6
   - 6 * 7 = 42
   - 20 / 4 = 5

2. **Decimal Test**
   - 3.5 + 2.5 = 6
   - 7.2 * 2 = 14.4

3. **Edge Cases Test**
   - Division by zero
   - Multiple operations in sequence
   - Clear and reset functionality

4. **Keyboard Test**
   - Number input via keyboard
   - Operations via keyboard
   - Backspace to delete
   - Enter to calculate

---

## Accessibility Features

✅ Semantic HTML buttons  
✅ Clear visual feedback  
✅ Keyboard navigation  
✅ Focus indicators  
✅ High color contrast  
✅ Large touch targets (40px minimum)  

---

## Future Enhancements

- [ ] Scientific calculator mode
- [ ] Calculation history
- [ ] Memory functions (M+, M-, MR)
- [ ] Percentage calculations
- [ ] Square root and power operations
- [ ] Theme switcher (light/dark)
- [ ] Voice input
- [ ] Number formatting (thousands separator)

---

## Notes

- Calculations are performed client-side
- All operations use JavaScript Math functions
- No backend integration required
- Ready for MERN stack frontend usage

---

## Support

For any issues:
1. Check browser console (F12) for logs
2. Test with different number combinations
3. Try keyboard input
4. Verify all buttons are responsive

---

**Submitted by:** Divyesh Gangera  
**Task:** Create a simple calculator with reusable button components  
**Status:** ✅ Complete and Ready for Submission
