// src/utils/dateUtils.js
import { format } from 'date-fns';

/**
 * Format a date to a specified format.
 * @param {Date|string|number} date - The date to format.
 * @param {string} dateFormat - The format string. Default is 'yyyy-MM-dd'.
 * @return {string} The formatted date string.
 */
export function formatDate(date, dateFormat = 'dd-MMM-yyyy') {
    return format(new Date(date), dateFormat);
}

export function formatDateTime(date, dateFormat = 'dd-MMM-yyyy HH:ii') {
    return format(new Date(date), dateFormat);
}

export const getMonthName = (monthNumber) => {
    const monthNames = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];
    // monthNumber is expected to be in the range 1-12
    return monthNames[monthNumber - 1];
};