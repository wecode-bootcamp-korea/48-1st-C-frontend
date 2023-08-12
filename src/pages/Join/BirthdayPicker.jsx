import React, { useState } from 'react';

function BirthdayPicker() {
  const [years, setYears] = useState(
    Array.from({ length: 120 }, (_, index) => 2023 - index + '년'),
  );
  const months = Array.from({ length: 12 }, (_, index) => index + 1 + '월');
  const days = Array.from({ length: 31 }, (_, index) => index + 1 + '일');

  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDay, setSelectedDay] = useState('');

  return (
    <div>
      <p>생일</p>
      <label>
        <select
          value={selectedYear}
          onChange={e => setSelectedYear(e.target.value)}
        >
          <option value="">Select Year</option>
          {years.map(year => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </label>
      <label>
        <select
          value={selectedMonth}
          onChange={e => setSelectedMonth(e.target.value)}
        >
          <option value="">Select Month</option>
          {months.map(month => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </label>
      <label>
        <select
          value={selectedDay}
          onChange={e => setSelectedDay(e.target.value)}
        >
          <option value="">Select Day</option>
          {days.map(day => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default BirthdayPicker;
