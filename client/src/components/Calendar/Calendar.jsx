import React, { useState } from 'react';
import './Calendar.css';

function Calendar() {
  // Get the current date
  const currentDate = new Date();

  // Get the current month and year
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Create an array of month names
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Create an array of day names
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Get the first day of the current month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);

  // Get the number of days in the current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Create an array to represent the days in the current month
  const calendarDays = Array.from({ length: daysInMonth }, (_, index) => index + 1);

  // Create a function to handle cell clicks
  const handleCellClick = (day) => {
    // Implement logic to handle task creation or display here
    console.log(`Clicked on day ${day}`);
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button className="prev-month-button">&lt;</button>
        <h2 className="month-name">
          {monthNames[currentMonth]} {currentYear}
        </h2>
        <button className="next-month-button">&gt;</button>
      </div>
      <table className="calendar-table">
        <thead>
          <tr>
            {dayNames.map((dayName) => (
              <th className="day-name" key={dayName}>
                {dayName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendarDays.map((day) => (
            <tr key={day}>
              {Array(7)
                .fill()
                .map((_, index) => {
                  const cellValue = day - firstDayOfMonth.getDay() + index;
                  const isCurrentMonth = cellValue > 0 && cellValue <= daysInMonth;
                  return (
                    <td
                      key={index}
                      className={`calendar-cell ${isCurrentMonth ? 'current-month' : ''}`}
                      onClick={() => handleCellClick(cellValue)}
                    >
                      {isCurrentMonth ? cellValue : ''}
                    </td>
                  );
                })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
