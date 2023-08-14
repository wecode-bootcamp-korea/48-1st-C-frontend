import React, { useEffect, useState } from 'react';

export default function Birthday({ onBirthdayChange }) {
  const years = Array.from({ length: 120 }, (_, index) =>
    (2023 - index).toString(),
  );
  const months = Array.from({ length: 12 }, (_, index) =>
    (index + 1).toString().padStart(2, '0'),
  );
  const days = Array.from({ length: 31 }, (_, index) =>
    (index + 1).toString().padStart(2, '0'),
  );

  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDay, setSelectedDay] = useState('');

  useEffect(() => {
    if (selectedYear && selectedMonth && selectedDay) {
      const formattedBirthday = `${selectedYear}-${selectedMonth}-${selectedDay}`;
      onBirthdayChange(formattedBirthday);
    }
  }, [selectedYear, selectedMonth, selectedDay]);

  return (
    <div className="birthdaySelect">
      <label>
        <select
          value={selectedYear}
          onChange={e => setSelectedYear(e.target.value)}
        >
          {years.map(year => (
            <option key={year} value={year}>
              {year}년
            </option>
          ))}
        </select>
      </label>
      <label>
        <select
          value={selectedMonth}
          onChange={e => setSelectedMonth(e.target.value)}
        >
          {months.map(month => (
            <option key={month} value={month}>
              {month}월
            </option>
          ))}
        </select>
      </label>
      <label>
        <select
          value={selectedDay}
          onChange={e => setSelectedDay(e.target.value)}
        >
          {days.map(day => (
            <option key={day} value={day}>
              {day}일
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
