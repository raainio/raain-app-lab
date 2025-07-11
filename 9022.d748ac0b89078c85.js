"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[9022],{

/***/ 52037:
/*!************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/data-caf38df0.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ getDayColumnData),
/* harmony export */   "B": () => (/* binding */ getYearColumnData),
/* harmony export */   "C": () => (/* binding */ isMonthFirstLocale),
/* harmony export */   "D": () => (/* binding */ getTimeColumnsData),
/* harmony export */   "E": () => (/* binding */ isLocaleDayPeriodRTL),
/* harmony export */   "F": () => (/* binding */ getDaysOfWeek),
/* harmony export */   "G": () => (/* binding */ getMonthAndYear),
/* harmony export */   "H": () => (/* binding */ getDaysOfMonth),
/* harmony export */   "I": () => (/* binding */ generateMonths),
/* harmony export */   "J": () => (/* binding */ is24Hour),
/* harmony export */   "K": () => (/* binding */ getLocalizedTime),
/* harmony export */   "L": () => (/* binding */ getMonthAndDay),
/* harmony export */   "M": () => (/* binding */ formatValue),
/* harmony export */   "N": () => (/* binding */ getNextYear),
/* harmony export */   "O": () => (/* binding */ getPreviousYear),
/* harmony export */   "P": () => (/* binding */ clampDate),
/* harmony export */   "Q": () => (/* binding */ parseAmPm),
/* harmony export */   "R": () => (/* binding */ calculateHourFromAMPM),
/* harmony export */   "S": () => (/* binding */ getLocalizedDateTime),
/* harmony export */   "T": () => (/* binding */ getMonthDayAndYear),
/* harmony export */   "a": () => (/* binding */ getDay),
/* harmony export */   "b": () => (/* binding */ isAfter),
/* harmony export */   "c": () => (/* binding */ isSameDay),
/* harmony export */   "d": () => (/* binding */ getPreviousMonth),
/* harmony export */   "e": () => (/* binding */ getNextMonth),
/* harmony export */   "f": () => (/* binding */ getPartsFromCalendarDay),
/* harmony export */   "g": () => (/* binding */ generateDayAriaLabel),
/* harmony export */   "h": () => (/* binding */ getEndOfWeek),
/* harmony export */   "i": () => (/* binding */ isBefore),
/* harmony export */   "j": () => (/* binding */ getStartOfWeek),
/* harmony export */   "k": () => (/* binding */ getPreviousDay),
/* harmony export */   "l": () => (/* binding */ getNextDay),
/* harmony export */   "m": () => (/* binding */ getPreviousWeek),
/* harmony export */   "n": () => (/* binding */ getNextWeek),
/* harmony export */   "o": () => (/* binding */ parseMaxParts),
/* harmony export */   "p": () => (/* binding */ parseMinParts),
/* harmony export */   "q": () => (/* binding */ parseDate),
/* harmony export */   "r": () => (/* binding */ convertToArrayOfNumbers),
/* harmony export */   "s": () => (/* binding */ convertDataToISO),
/* harmony export */   "t": () => (/* binding */ getToday),
/* harmony export */   "u": () => (/* binding */ getClosestValidDate),
/* harmony export */   "v": () => (/* binding */ validateParts),
/* harmony export */   "w": () => (/* binding */ warnIfValueOutOfBounds),
/* harmony export */   "x": () => (/* binding */ getNumDaysInMonth),
/* harmony export */   "y": () => (/* binding */ getCombinedDateColumnData),
/* harmony export */   "z": () => (/* binding */ getMonthColumnData)
/* harmony export */ });
/* harmony import */ var _index_c4b11676_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c4b11676.js */ 99273);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


/**
 * Returns true if the selected day is equal to the reference day
 */
const isSameDay = (baseParts, compareParts) => {
  return baseParts.month === compareParts.month && baseParts.day === compareParts.day && baseParts.year === compareParts.year;
};
/**
 * Returns true is the selected day is before the reference day.
 */
const isBefore = (baseParts, compareParts) => {
  return !!(baseParts.year < compareParts.year || baseParts.year === compareParts.year && baseParts.month < compareParts.month || baseParts.year === compareParts.year && baseParts.month === compareParts.month && baseParts.day !== null && baseParts.day < compareParts.day);
};
/**
 * Returns true is the selected day is after the reference day.
 */
const isAfter = (baseParts, compareParts) => {
  return !!(baseParts.year > compareParts.year || baseParts.year === compareParts.year && baseParts.month > compareParts.month || baseParts.year === compareParts.year && baseParts.month === compareParts.month && baseParts.day !== null && baseParts.day > compareParts.day);
};
const warnIfValueOutOfBounds = (value, min, max) => {
  const valueArray = Array.isArray(value) ? value : [value];
  for (const val of valueArray) {
    if (min !== undefined && isBefore(val, min) || max !== undefined && isAfter(val, max)) {
      (0,_index_c4b11676_js__WEBPACK_IMPORTED_MODULE_0__.p)('The value provided to ion-datetime is out of bounds.\n\n' + `Min: ${JSON.stringify(min)}\n` + `Max: ${JSON.stringify(max)}\n` + `Value: ${JSON.stringify(value)}`);
      break;
    }
  }
};

/**
 * Determines if given year is a
 * leap year. Returns `true` if year
 * is a leap year. Returns `false`
 * otherwise.
 */
const isLeapYear = year => {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
};
const is24Hour = (locale, hourCycle) => {
  /**
   * If developer has explicitly enabled h23 time
   * then return early and do not look at the system default.
   */
  if (hourCycle !== undefined) {
    return hourCycle === 'h23';
  }
  /**
   * If hourCycle was not specified, check the locale
   * that is set on the user's device. We first check the
   * Intl.DateTimeFormat hourCycle option as developers can encode this
   * option into the locale string. Example: `en-US-u-hc-h23`
   */
  const formatted = new Intl.DateTimeFormat(locale, {
    hour: 'numeric'
  });
  const options = formatted.resolvedOptions();
  if (options.hourCycle !== undefined) {
    return options.hourCycle === 'h23';
  }
  /**
   * If hourCycle is not specified (either through lack
   * of browser support or locale information) then fall
   * back to this slower hourCycle check.
   */
  const date = new Date('5/18/2021 00:00');
  const parts = formatted.formatToParts(date);
  const hour = parts.find(p => p.type === 'hour');
  if (!hour) {
    throw new Error('Hour value not found from DateTimeFormat');
  }
  return hour.value === '00';
};
/**
 * Given a date object, returns the number
 * of days in that month.
 * Month value begin at 1, not 0.
 * i.e. January = month 1.
 */
const getNumDaysInMonth = (month, year) => {
  return month === 4 || month === 6 || month === 9 || month === 11 ? 30 : month === 2 ? isLeapYear(year) ? 29 : 28 : 31;
};
/**
 * Certain locales display month then year while
 * others display year then month.
 * We can use Intl.DateTimeFormat to determine
 * the ordering for each locale.
 * The formatOptions param can be used to customize
 * which pieces of a date to compare against the month
 * with. For example, some locales render dd/mm/yyyy
 * while others render mm/dd/yyyy. This function can be
 * used for variations of the same "month first" check.
 */
const isMonthFirstLocale = (locale, formatOptions = {
  month: 'numeric',
  year: 'numeric'
}) => {
  /**
   * By setting month and year we guarantee that only
   * month, year, and literal (slashes '/', for example)
   * values are included in the formatToParts results.
   *
   * The ordering of the parts will be determined by
   * the locale. So if the month is the first value,
   * then we know month should be shown first. If the
   * year is the first value, then we know year should be shown first.
   *
   * This ordering can be controlled by customizing the locale property.
   */
  const parts = new Intl.DateTimeFormat(locale, formatOptions).formatToParts(new Date());
  return parts[0].type === 'month';
};
/**
 * Determines if the given locale formats the day period (am/pm) to the
 * left or right of the hour.
 * @param locale The locale to check.
 * @returns `true` if the locale formats the day period to the left of the hour.
 */
const isLocaleDayPeriodRTL = locale => {
  const parts = new Intl.DateTimeFormat(locale, {
    hour: 'numeric'
  }).formatToParts(new Date());
  return parts[0].type === 'dayPeriod';
};
const ISO_8601_REGEXP =
// eslint-disable-next-line no-useless-escape
/^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;
// eslint-disable-next-line no-useless-escape
const TIME_REGEXP = /^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;
/**
 * Use to convert a string of comma separated numbers or
 * an array of numbers, and clean up any user input
 */
const convertToArrayOfNumbers = input => {
  if (input === undefined) {
    return;
  }
  let processedInput = input;
  if (typeof input === 'string') {
    // convert the string to an array of strings
    // auto remove any whitespace and [] characters
    processedInput = input.replace(/\[|\]|\s/g, '').split(',');
  }
  let values;
  if (Array.isArray(processedInput)) {
    // ensure each value is an actual number in the returned array
    values = processedInput.map(num => parseInt(num, 10)).filter(isFinite);
  } else {
    values = [processedInput];
  }
  return values;
};
/**
 * Extracts date information
 * from a .calendar-day element
 * into DatetimeParts.
 */
const getPartsFromCalendarDay = el => {
  return {
    month: parseInt(el.getAttribute('data-month'), 10),
    day: parseInt(el.getAttribute('data-day'), 10),
    year: parseInt(el.getAttribute('data-year'), 10),
    dayOfWeek: parseInt(el.getAttribute('data-day-of-week'), 10)
  };
};
function parseDate(val) {
  if (Array.isArray(val)) {
    return val.map(valStr => parseDate(valStr));
  }
  // manually parse IS0 cuz Date.parse cannot be trusted
  // ISO 8601 format: 1994-12-15T13:47:20Z
  let parse = null;
  if (val != null && val !== '') {
    // try parsing for just time first, HH:MM
    parse = TIME_REGEXP.exec(val);
    if (parse) {
      // adjust the array so it fits nicely with the datetime parse
      parse.unshift(undefined, undefined);
      parse[2] = parse[3] = undefined;
    } else {
      // try parsing for full ISO datetime
      parse = ISO_8601_REGEXP.exec(val);
    }
  }
  if (parse === null) {
    // wasn't able to parse the ISO datetime
    return undefined;
  }
  // ensure all the parse values exist with at least 0
  for (let i = 1; i < 8; i++) {
    parse[i] = parse[i] !== undefined ? parseInt(parse[i], 10) : undefined;
  }
  let tzOffset = 0;
  if (parse[9] && parse[10]) {
    // hours
    tzOffset = parseInt(parse[10], 10) * 60;
    if (parse[11]) {
      // minutes
      tzOffset += parseInt(parse[11], 10);
    }
    if (parse[9] === '-') {
      // + or -
      tzOffset *= -1;
    }
  }
  // can also get second and millisecond from parse[6] and parse[7] if needed
  return {
    year: parse[1],
    month: parse[2],
    day: parse[3],
    hour: parse[4],
    minute: parse[5],
    tzOffset,
    ampm: parse[4] < 12 ? 'am' : 'pm'
  };
}
const clampDate = (dateParts, minParts, maxParts) => {
  if (minParts && isBefore(dateParts, minParts)) {
    return minParts;
  } else if (maxParts && isAfter(dateParts, maxParts)) {
    return maxParts;
  }
  return dateParts;
};
/**
 * Parses an hour and returns if the value is in the morning (am) or afternoon (pm).
 * @param hour The hour to format, should be 0-23
 * @returns `pm` if the hour is greater than or equal to 12, `am` if less than 12.
 */
const parseAmPm = hour => {
  return hour >= 12 ? 'pm' : 'am';
};
/**
 * Takes a max date string and creates a DatetimeParts
 * object, filling in any missing information.
 * For example, max="2012" would fill in the missing
 * month, day, hour, and minute information.
 */
const parseMaxParts = (max, todayParts) => {
  const {
    month,
    day,
    year,
    hour,
    minute
  } = parseDate(max);
  /**
   * When passing in `max` or `min`, developers
   * can pass in any ISO-8601 string. This means
   * that not all of the date/time fields are defined.
   * For example, passing max="2012" is valid even though
   * there is no month, day, hour, or minute data.
   * However, all of this data is required when clamping the date
   * so that the correct initial value can be selected. As a result,
   * we need to fill in any omitted data with the min or max values.
   */
  const yearValue = year !== null && year !== void 0 ? year : todayParts.year;
  const monthValue = month !== null && month !== void 0 ? month : 12;
  return {
    month: monthValue,
    day: day !== null && day !== void 0 ? day : getNumDaysInMonth(monthValue, yearValue),
    /**
     * Passing in "HH:mm" is a valid ISO-8601
     * string, so we just default to the current year
     * in this case.
     */
    year: yearValue,
    hour: hour !== null && hour !== void 0 ? hour : 23,
    minute: minute !== null && minute !== void 0 ? minute : 59
  };
};
/**
 * Takes a min date string and creates a DatetimeParts
 * object, filling in any missing information.
 * For example, min="2012" would fill in the missing
 * month, day, hour, and minute information.
 */
const parseMinParts = (min, todayParts) => {
  const {
    month,
    day,
    year,
    hour,
    minute
  } = parseDate(min);
  /**
   * When passing in `max` or `min`, developers
   * can pass in any ISO-8601 string. This means
   * that not all of the date/time fields are defined.
   * For example, passing max="2012" is valid even though
   * there is no month, day, hour, or minute data.
   * However, all of this data is required when clamping the date
   * so that the correct initial value can be selected. As a result,
   * we need to fill in any omitted data with the min or max values.
   */
  return {
    month: month !== null && month !== void 0 ? month : 1,
    day: day !== null && day !== void 0 ? day : 1,
    /**
     * Passing in "HH:mm" is a valid ISO-8601
     * string, so we just default to the current year
     * in this case.
     */
    year: year !== null && year !== void 0 ? year : todayParts.year,
    hour: hour !== null && hour !== void 0 ? hour : 0,
    minute: minute !== null && minute !== void 0 ? minute : 0
  };
};
const twoDigit = val => {
  return ('0' + (val !== undefined ? Math.abs(val) : '0')).slice(-2);
};
const fourDigit = val => {
  return ('000' + (val !== undefined ? Math.abs(val) : '0')).slice(-4);
};
function convertDataToISO(data) {
  if (Array.isArray(data)) {
    return data.map(parts => convertDataToISO(parts));
  }
  // https://www.w3.org/TR/NOTE-datetime
  let rtn = '';
  if (data.year !== undefined) {
    // YYYY
    rtn = fourDigit(data.year);
    if (data.month !== undefined) {
      // YYYY-MM
      rtn += '-' + twoDigit(data.month);
      if (data.day !== undefined) {
        // YYYY-MM-DD
        rtn += '-' + twoDigit(data.day);
        if (data.hour !== undefined) {
          // YYYY-MM-DDTHH:mm:SS
          rtn += `T${twoDigit(data.hour)}:${twoDigit(data.minute)}:00`;
          if (data.tzOffset === undefined) {
            // YYYY-MM-DDTHH:mm:SSZ
            rtn += 'Z';
          } else {
            // YYYY-MM-DDTHH:mm:SS+/-HH:mm
            rtn += (data.tzOffset > 0 ? '+' : '-') + twoDigit(Math.floor(Math.abs(data.tzOffset / 60))) + ':' + twoDigit(data.tzOffset % 60);
          }
        }
      }
    }
  } else if (data.hour !== undefined) {
    // HH:mm
    rtn = twoDigit(data.hour) + ':' + twoDigit(data.minute);
  }
  return rtn;
}
/**
 * Converts an 12 hour value to 24 hours.
 */
const convert12HourTo24Hour = (hour, ampm) => {
  if (ampm === undefined) {
    return hour;
  }
  /**
   * If AM and 12am
   * then return 00:00.
   * Otherwise just return
   * the hour since it is
   * already in 24 hour format.
   */
  if (ampm === 'am') {
    if (hour === 12) {
      return 0;
    }
    return hour;
  }
  /**
   * If PM and 12pm
   * just return 12:00
   * since it is already
   * in 24 hour format.
   * Otherwise add 12 hours
   * to the time.
   */
  if (hour === 12) {
    return 12;
  }
  return hour + 12;
};
const getStartOfWeek = refParts => {
  const {
    dayOfWeek
  } = refParts;
  if (dayOfWeek === null || dayOfWeek === undefined) {
    throw new Error('No day of week provided');
  }
  return subtractDays(refParts, dayOfWeek);
};
const getEndOfWeek = refParts => {
  const {
    dayOfWeek
  } = refParts;
  if (dayOfWeek === null || dayOfWeek === undefined) {
    throw new Error('No day of week provided');
  }
  return addDays(refParts, 6 - dayOfWeek);
};
const getNextDay = refParts => {
  return addDays(refParts, 1);
};
const getPreviousDay = refParts => {
  return subtractDays(refParts, 1);
};
const getPreviousWeek = refParts => {
  return subtractDays(refParts, 7);
};
const getNextWeek = refParts => {
  return addDays(refParts, 7);
};
/**
 * Given datetime parts, subtract
 * numDays from the date.
 * Returns a new DatetimeParts object
 * Currently can only go backward at most 1 month.
 */
const subtractDays = (refParts, numDays) => {
  const {
    month,
    day,
    year
  } = refParts;
  if (day === null) {
    throw new Error('No day provided');
  }
  const workingParts = {
    month,
    day,
    year
  };
  workingParts.day = day - numDays;
  /**
   * If wrapping to previous month
   * update days and decrement month
   */
  if (workingParts.day < 1) {
    workingParts.month -= 1;
  }
  /**
   * If moving to previous year, reset
   * month to December and decrement year
   */
  if (workingParts.month < 1) {
    workingParts.month = 12;
    workingParts.year -= 1;
  }
  /**
   * Determine how many days are in the current
   * month
   */
  if (workingParts.day < 1) {
    const daysInMonth = getNumDaysInMonth(workingParts.month, workingParts.year);
    /**
     * Take num days in month and add the
     * number of underflow days. This number will
     * be negative.
     * Example: 1 week before Jan 2, 2021 is
     * December 26, 2021 so:
     * 2 - 7 = -5
     * 31 + (-5) = 26
     */
    workingParts.day = daysInMonth + workingParts.day;
  }
  return workingParts;
};
/**
 * Given datetime parts, add
 * numDays to the date.
 * Returns a new DatetimeParts object
 * Currently can only go forward at most 1 month.
 */
const addDays = (refParts, numDays) => {
  const {
    month,
    day,
    year
  } = refParts;
  if (day === null) {
    throw new Error('No day provided');
  }
  const workingParts = {
    month,
    day,
    year
  };
  const daysInMonth = getNumDaysInMonth(month, year);
  workingParts.day = day + numDays;
  /**
   * If wrapping to next month
   * update days and increment month
   */
  if (workingParts.day > daysInMonth) {
    workingParts.day -= daysInMonth;
    workingParts.month += 1;
  }
  /**
   * If moving to next year, reset
   * month to January and increment year
   */
  if (workingParts.month > 12) {
    workingParts.month = 1;
    workingParts.year += 1;
  }
  return workingParts;
};
/**
 * Given DatetimeParts, generate the previous month.
 */
const getPreviousMonth = refParts => {
  /**
   * If current month is January, wrap backwards
   *  to December of the previous year.
   */
  const month = refParts.month === 1 ? 12 : refParts.month - 1;
  const year = refParts.month === 1 ? refParts.year - 1 : refParts.year;
  const numDaysInMonth = getNumDaysInMonth(month, year);
  const day = numDaysInMonth < refParts.day ? numDaysInMonth : refParts.day;
  return {
    month,
    year,
    day
  };
};
/**
 * Given DatetimeParts, generate the next month.
 */
const getNextMonth = refParts => {
  /**
   * If current month is December, wrap forwards
   *  to January of the next year.
   */
  const month = refParts.month === 12 ? 1 : refParts.month + 1;
  const year = refParts.month === 12 ? refParts.year + 1 : refParts.year;
  const numDaysInMonth = getNumDaysInMonth(month, year);
  const day = numDaysInMonth < refParts.day ? numDaysInMonth : refParts.day;
  return {
    month,
    year,
    day
  };
};
const changeYear = (refParts, yearDelta) => {
  const month = refParts.month;
  const year = refParts.year + yearDelta;
  const numDaysInMonth = getNumDaysInMonth(month, year);
  const day = numDaysInMonth < refParts.day ? numDaysInMonth : refParts.day;
  return {
    month,
    year,
    day
  };
};
/**
 * Given DatetimeParts, generate the previous year.
 */
const getPreviousYear = refParts => {
  return changeYear(refParts, -1);
};
/**
 * Given DatetimeParts, generate the next year.
 */
const getNextYear = refParts => {
  return changeYear(refParts, 1);
};
/**
 * If PM, then internal value should
 * be converted to 24-hr time.
 * Does not apply when public
 * values are already 24-hr time.
 */
const getInternalHourValue = (hour, use24Hour, ampm) => {
  if (use24Hour) {
    return hour;
  }
  return convert12HourTo24Hour(hour, ampm);
};
/**
 * Unless otherwise stated, all month values are
 * 1 indexed instead of the typical 0 index in JS Date.
 * Example:
 *   January = Month 0 when using JS Date
 *   January = Month 1 when using this datetime util
 */
/**
 * Given the current datetime parts and a new AM/PM value
 * calculate what the hour should be in 24-hour time format.
 * Used when toggling the AM/PM segment since we store our hours
 * in 24-hour time format internally.
 */
const calculateHourFromAMPM = (currentParts, newAMPM) => {
  const {
    ampm: currentAMPM,
    hour
  } = currentParts;
  let newHour = hour;
  /**
   * If going from AM --> PM, need to update the
   *
   */
  if (currentAMPM === 'am' && newAMPM === 'pm') {
    newHour = convert12HourTo24Hour(newHour, 'pm');
    /**
     * If going from PM --> AM
     */
  } else if (currentAMPM === 'pm' && newAMPM === 'am') {
    newHour = Math.abs(newHour - 12);
  }
  return newHour;
};
/**
 * Updates parts to ensure that month and day
 * values are valid. For days that do not exist,
 * the closest valid day is used.
 */
const validateParts = (parts, minParts, maxParts) => {
  const {
    month,
    day,
    year
  } = parts;
  const partsCopy = Object.assign({}, parts);
  const numDays = getNumDaysInMonth(month, year);
  /**
   * If the max number of days
   * is greater than the day we want
   * to set, update the DatetimeParts
   * day field to be the max days.
   */
  if (day !== null && numDays < day) {
    partsCopy.day = numDays;
  }
  /**
   * If value is same day as min day,
   * make sure the time value is in bounds.
   */
  if (minParts !== undefined && isSameDay(partsCopy, minParts)) {
    /**
     * If the hour is out of bounds,
     * update both the hour and minute.
     * This is done so that the new time
     * is closest to what the user selected.
     */
    if (partsCopy.hour !== undefined && minParts.hour !== undefined) {
      if (partsCopy.hour < minParts.hour) {
        partsCopy.hour = minParts.hour;
        partsCopy.minute = minParts.minute;
        /**
         * If only the minute is out of bounds,
         * set it to the min minute.
         */
      } else if (partsCopy.hour === minParts.hour && partsCopy.minute !== undefined && minParts.minute !== undefined && partsCopy.minute < minParts.minute) {
        partsCopy.minute = minParts.minute;
      }
    }
  }
  /**
   * If value is same day as max day,
   * make sure the time value is in bounds.
   */
  if (maxParts !== undefined && isSameDay(parts, maxParts)) {
    /**
     * If the hour is out of bounds,
     * update both the hour and minute.
     * This is done so that the new time
     * is closest to what the user selected.
     */
    if (partsCopy.hour !== undefined && maxParts.hour !== undefined) {
      if (partsCopy.hour > maxParts.hour) {
        partsCopy.hour = maxParts.hour;
        partsCopy.minute = maxParts.minute;
        /**
         * If only the minute is out of bounds,
         * set it to the max minute.
         */
      } else if (partsCopy.hour === maxParts.hour && partsCopy.minute !== undefined && maxParts.minute !== undefined && partsCopy.minute > maxParts.minute) {
        partsCopy.minute = maxParts.minute;
      }
    }
  }
  return partsCopy;
};
/**
 * Returns the closest date to refParts
 * that also meets the constraints of
 * the *Values params.
 * @param refParts The reference date
 * @param monthValues The allowed month values
 * @param dayValues The allowed day (of the month) values
 * @param yearValues The allowed year values
 * @param hourValues The allowed hour values
 * @param minuteValues The allowed minute values
 */
const getClosestValidDate = (refParts, monthValues, dayValues, yearValues, hourValues, minuteValues) => {
  const {
    hour,
    minute,
    day,
    month,
    year
  } = refParts;
  const copyParts = Object.assign(Object.assign({}, refParts), {
    dayOfWeek: undefined
  });
  if (monthValues !== undefined) {
    copyParts.month = findClosestValue(month, monthValues);
  }
  // Day is nullable but cannot be undefined
  if (day !== null && dayValues !== undefined) {
    copyParts.day = findClosestValue(day, dayValues);
  }
  if (yearValues !== undefined) {
    copyParts.year = findClosestValue(year, yearValues);
  }
  if (hour !== undefined && hourValues !== undefined) {
    copyParts.hour = findClosestValue(hour, hourValues);
    copyParts.ampm = parseAmPm(copyParts.hour);
  }
  if (minute !== undefined && minuteValues !== undefined) {
    copyParts.minute = findClosestValue(minute, minuteValues);
  }
  return copyParts;
};
/**
 * Finds the value in "values" that is
 * numerically closest to "reference".
 * This function assumes that "values" is
 * already sorted in ascending order.
 * @param reference The reference number to use
 * when finding the closest value
 * @param values The allowed values that will be
 * searched to find the closest value to "reference"
 */
const findClosestValue = (reference, values) => {
  let closestValue = values[0];
  let rank = Math.abs(closestValue - reference);
  for (let i = 1; i < values.length; i++) {
    const value = values[i];
    /**
     * This code prioritizes the first
     * closest result. Given two values
     * with the same distance from reference,
     * this code will prioritize the smaller of
     * the two values.
     */
    const valueRank = Math.abs(value - reference);
    if (valueRank < rank) {
      closestValue = value;
      rank = valueRank;
    }
  }
  return closestValue;
};
const getFormattedDayPeriod = dayPeriod => {
  if (dayPeriod === undefined) {
    return '';
  }
  return dayPeriod.toUpperCase();
};
const getLocalizedTime = (locale, refParts, use24Hour) => {
  const timeParts = {
    hour: refParts.hour,
    minute: refParts.minute
  };
  if (timeParts.hour === undefined || timeParts.minute === undefined) {
    return 'Invalid Time';
  }
  return new Intl.DateTimeFormat(locale, {
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'UTC',
    /**
     * We use hourCycle here instead of hour12 due to:
     * https://bugs.chromium.org/p/chromium/issues/detail?id=1347316&q=hour12&can=2
     */
    hourCycle: use24Hour ? 'h23' : 'h12'
  }).format(new Date(convertDataToISO(Object.assign(Object.assign({
    /**
     * JS uses a simplified ISO 8601 format which allows for
     * date-only formats and date-time formats, but not
     * time-only formats: https://tc39.es/ecma262/#sec-date-time-string-format
     * As a result, developers who only pass a time will get
     * an "Invalid Date" error. To account for this, we make sure that
     * year/day/month values are set when passing to new Date().
     * The Intl.DateTimeFormat call above only uses the hour/minute
     * values, so passing these date values should have no impact
     * on the time output.
     */
    year: 2023,
    day: 1,
    month: 1
  }, timeParts), {
    // TODO: FW-1831 will remove the need to manually set the tzOffset to undefined
    tzOffset: undefined
  }))));
};
/**
 * Adds padding to a time value so
 * that it is always 2 digits.
 */
const addTimePadding = value => {
  const valueToString = value.toString();
  if (valueToString.length > 1) {
    return valueToString;
  }
  return `0${valueToString}`;
};
/**
 * Formats 24 hour times so that
 * it always has 2 digits. For
 * 12 hour times it ensures that
 * hour 0 is formatted as '12'.
 */
const getFormattedHour = (hour, use24Hour) => {
  if (use24Hour) {
    return addTimePadding(hour);
  }
  /**
   * If using 12 hour
   * format, make sure hour
   * 0 is formatted as '12'.
   */
  if (hour === 0) {
    return '12';
  }
  return hour.toString();
};
/**
 * Generates an aria-label to be read by screen readers
 * given a local, a date, and whether or not that date is
 * today's date.
 */
const generateDayAriaLabel = (locale, today, refParts) => {
  if (refParts.day === null) {
    return null;
  }
  /**
   * MM/DD/YYYY will return midnight in the user's timezone.
   */
  const date = new Date(`${refParts.month}/${refParts.day}/${refParts.year} GMT+0000`);
  const labelString = new Intl.DateTimeFormat(locale, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  }).format(date);
  /**
   * If date is today, prepend "Today" so screen readers indicate
   * that the date is today.
   */
  return today ? `Today, ${labelString}` : labelString;
};
/**
 * Gets the day of the week, month, and day
 * Used for the header in MD mode.
 */
const getMonthAndDay = (locale, refParts) => {
  const date = new Date(`${refParts.month}/${refParts.day}/${refParts.year} GMT+0000`);
  return new Intl.DateTimeFormat(locale, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC'
  }).format(date);
};
/**
 * Given a locale and a date object,
 * return a formatted string that includes
 * the month name and full year.
 * Example: May 2021
 */
const getMonthAndYear = (locale, refParts) => {
  const date = new Date(`${refParts.month}/${refParts.day}/${refParts.year} GMT+0000`);
  return new Intl.DateTimeFormat(locale, {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC'
  }).format(date);
};
/**
 * Given a locale and a date object,
 * return a formatted string that includes
 * the short month, numeric day, and full year.
 * Example: Apr 22, 2021
 */
const getMonthDayAndYear = (locale, refParts) => {
  return getLocalizedDateTime(locale, refParts, {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};
/**
 * Given a locale and a date object,
 * return a formatted string that includes
 * the numeric day.
 * Note: Some languages will add literal characters
 * to the end. This function removes those literals.
 * Example: 29
 */
const getDay = (locale, refParts) => {
  return getLocalizedDateTimeParts(locale, refParts, {
    day: 'numeric'
  }).find(obj => obj.type === 'day').value;
};
/**
 * Given a locale and a date object,
 * return a formatted string that includes
 * the numeric year.
 * Example: 2022
 */
const getYear = (locale, refParts) => {
  return getLocalizedDateTime(locale, refParts, {
    year: 'numeric'
  });
};
const getNormalizedDate = refParts => {
  const timeString = refParts.hour !== undefined && refParts.minute !== undefined ? ` ${refParts.hour}:${refParts.minute}` : '';
  return new Date(`${refParts.month}/${refParts.day}/${refParts.year}${timeString} GMT+0000`);
};
/**
 * Given a locale, DatetimeParts, and options
 * format the DatetimeParts according to the options
 * and locale combination. This returns a string. If
 * you want an array of the individual pieces
 * that make up the localized date string, use
 * getLocalizedDateTimeParts.
 */
const getLocalizedDateTime = (locale, refParts, options) => {
  const date = getNormalizedDate(refParts);
  return getDateTimeFormat(locale, options).format(date);
};
/**
 * Given a locale, DatetimeParts, and options
 * format the DatetimeParts according to the options
 * and locale combination. This returns an array of
 * each piece of the date.
 */
const getLocalizedDateTimeParts = (locale, refParts, options) => {
  const date = getNormalizedDate(refParts);
  return getDateTimeFormat(locale, options).formatToParts(date);
};
/**
 * Wrapper function for Intl.DateTimeFormat.
 * Allows developers to apply an allowed format to DatetimeParts.
 * This function also has built in safeguards for older browser bugs
 * with Intl.DateTimeFormat.
 */
const getDateTimeFormat = (locale, options) => {
  return new Intl.DateTimeFormat(locale, Object.assign(Object.assign({}, options), {
    timeZone: 'UTC'
  }));
};
/**
 * Gets a localized version of "Today"
 * Falls back to "Today" in English for
 * browsers that do not support RelativeTimeFormat.
 */
const getTodayLabel = locale => {
  if ('RelativeTimeFormat' in Intl) {
    const label = new Intl.RelativeTimeFormat(locale, {
      numeric: 'auto'
    }).format(0, 'day');
    return label.charAt(0).toUpperCase() + label.slice(1);
  } else {
    return 'Today';
  }
};
/**
 * When calling toISOString(), the browser
 * will convert the date to UTC time by either adding
 * or subtracting the time zone offset.
 * To work around this, we need to either add
 * or subtract the time zone offset to the Date
 * object prior to calling toISOString().
 * This allows us to get an ISO string
 * that is in the user's time zone.
 *
 * Example:
 * Time zone offset is 240
 * Meaning: The browser needs to add 240 minutes
 * to the Date object to get UTC time.
 * What Ionic does: We subtract 240 minutes
 * from the Date object. The browser then adds
 * 240 minutes in toISOString(). The result
 * is a time that is in the user's time zone
 * and not UTC.
 *
 * Note: Some timezones include minute adjustments
 * such as 30 or 45 minutes. This is why we use setMinutes
 * instead of setHours.
 * Example: India Standard Time
 * Timezone offset: -330 = -5.5 hours.
 *
 * List of timezones with 30 and 45 minute timezones:
 * https://www.timeanddate.com/time/time-zones-interesting.html
 */
const removeDateTzOffset = date => {
  const tzOffset = date.getTimezoneOffset();
  date.setMinutes(date.getMinutes() - tzOffset);
  return date;
};
const DATE_AM = removeDateTzOffset(new Date('2022T01:00'));
const DATE_PM = removeDateTzOffset(new Date('2022T13:00'));
/**
 * Formats the locale's string representation of the day period (am/pm) for a given
 * ref parts day period.
 *
 * @param locale The locale to format the day period in.
 * @param value The date string, in ISO format.
 * @returns The localized day period (am/pm) representation of the given value.
 */
const getLocalizedDayPeriod = (locale, dayPeriod) => {
  const date = dayPeriod === 'am' ? DATE_AM : DATE_PM;
  const localizedDayPeriod = new Intl.DateTimeFormat(locale, {
    hour: 'numeric',
    timeZone: 'UTC'
  }).formatToParts(date).find(part => part.type === 'dayPeriod');
  if (localizedDayPeriod) {
    return localizedDayPeriod.value;
  }
  return getFormattedDayPeriod(dayPeriod);
};
/**
 * Formats the datetime's value to a string, for use in the native input.
 *
 * @param value The value to format, either an ISO string or an array thereof.
 */
const formatValue = value => {
  return Array.isArray(value) ? value.join(',') : value;
};

/**
 * Returns the current date as
 * an ISO string in the user's
 * time zone.
 */
const getToday = () => {
  /**
   * ion-datetime intentionally does not
   * parse time zones/do automatic time zone
   * conversion when accepting user input.
   * However when we get today's date string,
   * we want it formatted relative to the user's
   * time zone.
   *
   * When calling toISOString(), the browser
   * will convert the date to UTC time by either adding
   * or subtracting the time zone offset.
   * To work around this, we need to either add
   * or subtract the time zone offset to the Date
   * object prior to calling toISOString().
   * This allows us to get an ISO string
   * that is in the user's time zone.
   */
  return removeDateTzOffset(new Date()).toISOString();
};
const minutes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59];
const hour12 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const hour23 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
/**
 * Given a locale and a mode,
 * return an array with formatted days
 * of the week. iOS should display days
 * such as "Mon" or "Tue".
 * MD should display days such as "M"
 * or "T".
 */
const getDaysOfWeek = (locale, mode, firstDayOfWeek = 0) => {
  /**
   * Nov 1st, 2020 starts on a Sunday.
   * ion-datetime assumes weeks start on Sunday,
   * but is configurable via `firstDayOfWeek`.
   */
  const weekdayFormat = mode === 'ios' ? 'short' : 'narrow';
  const intl = new Intl.DateTimeFormat(locale, {
    weekday: weekdayFormat
  });
  const startDate = new Date('11/01/2020');
  const daysOfWeek = [];
  /**
   * For each day of the week,
   * get the day name.
   */
  for (let i = firstDayOfWeek; i < firstDayOfWeek + 7; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(currentDate.getDate() + i);
    daysOfWeek.push(intl.format(currentDate));
  }
  return daysOfWeek;
};
/**
 * Returns an array containing all of the
 * days in a month for a given year. Values are
 * aligned with a week calendar starting on
 * the firstDayOfWeek value (Sunday by default)
 * using null values.
 */
const getDaysOfMonth = (month, year, firstDayOfWeek) => {
  const numDays = getNumDaysInMonth(month, year);
  const firstOfMonth = new Date(`${month}/1/${year}`).getDay();
  /**
   * To get the first day of the month aligned on the correct
   * day of the week, we need to determine how many "filler" days
   * to generate. These filler days as empty/disabled buttons
   * that fill the space of the days of the week before the first
   * of the month.
   *
   * There are two cases here:
   *
   * 1. If firstOfMonth = 4, firstDayOfWeek = 0 then the offset
   * is (4 - (0 + 1)) = 3. Since the offset loop goes from 0 to 3 inclusive,
   * this will generate 4 filler days (0, 1, 2, 3), and then day of week 4 will have
   * the first day of the month.
   *
   * 2. If firstOfMonth = 2, firstDayOfWeek = 4 then the offset
   * is (6 - (4 - 2)) = 4. Since the offset loop goes from 0 to 4 inclusive,
   * this will generate 5 filler days (0, 1, 2, 3, 4), and then day of week 5 will have
   * the first day of the month.
   */
  const offset = firstOfMonth >= firstDayOfWeek ? firstOfMonth - (firstDayOfWeek + 1) : 6 - (firstDayOfWeek - firstOfMonth);
  let days = [];
  for (let i = 1; i <= numDays; i++) {
    days.push({
      day: i,
      dayOfWeek: (offset + i) % 7
    });
  }
  for (let i = 0; i <= offset; i++) {
    days = [{
      day: null,
      dayOfWeek: null
    }, ...days];
  }
  return days;
};
/**
 * Given a local, reference datetime parts and option
 * max/min bound datetime parts, calculate the acceptable
 * hour and minute values according to the bounds and locale.
 */
const generateTime = (refParts, hourCycle = 'h12', minParts, maxParts, hourValues, minuteValues) => {
  const use24Hour = hourCycle === 'h23';
  let processedHours = use24Hour ? hour23 : hour12;
  let processedMinutes = minutes;
  let isAMAllowed = true;
  let isPMAllowed = true;
  if (hourValues) {
    processedHours = processedHours.filter(hour => hourValues.includes(hour));
  }
  if (minuteValues) {
    processedMinutes = processedMinutes.filter(minute => minuteValues.includes(minute));
  }
  if (minParts) {
    /**
     * If ref day is the same as the
     * minimum allowed day, filter hour/minute
     * values according to min hour and minute.
     */
    if (isSameDay(refParts, minParts)) {
      /**
       * Users may not always set the hour/minute for
       * min value (i.e. 2021-06-02) so we should allow
       * all hours/minutes in that case.
       */
      if (minParts.hour !== undefined) {
        processedHours = processedHours.filter(hour => {
          const convertedHour = refParts.ampm === 'pm' ? (hour + 12) % 24 : hour;
          return (use24Hour ? hour : convertedHour) >= minParts.hour;
        });
        isAMAllowed = minParts.hour < 13;
      }
      if (minParts.minute !== undefined) {
        /**
         * The minimum minute range should not be enforced when
         * the hour is greater than the min hour.
         *
         * For example with a minimum range of 09:30, users
         * should be able to select 10:00-10:29 and beyond.
         */
        let isPastMinHour = false;
        if (minParts.hour !== undefined && refParts.hour !== undefined) {
          if (refParts.hour > minParts.hour) {
            isPastMinHour = true;
          }
        }
        processedMinutes = processedMinutes.filter(minute => {
          if (isPastMinHour) {
            return true;
          }
          return minute >= minParts.minute;
        });
      }
      /**
       * If ref day is before minimum
       * day do not render any hours/minute values
       */
    } else if (isBefore(refParts, minParts)) {
      processedHours = [];
      processedMinutes = [];
      isAMAllowed = isPMAllowed = false;
    }
  }
  if (maxParts) {
    /**
     * If ref day is the same as the
     * maximum allowed day, filter hour/minute
     * values according to max hour and minute.
     */
    if (isSameDay(refParts, maxParts)) {
      /**
       * Users may not always set the hour/minute for
       * max value (i.e. 2021-06-02) so we should allow
       * all hours/minutes in that case.
       */
      if (maxParts.hour !== undefined) {
        processedHours = processedHours.filter(hour => {
          const convertedHour = refParts.ampm === 'pm' ? (hour + 12) % 24 : hour;
          return (use24Hour ? hour : convertedHour) <= maxParts.hour;
        });
        isPMAllowed = maxParts.hour >= 12;
      }
      if (maxParts.minute !== undefined && refParts.hour === maxParts.hour) {
        // The available minutes should only be filtered when the hour is the same as the max hour.
        // For example if the max hour is 10:30 and the current hour is 10:00,
        // users should be able to select 00-30 minutes.
        // If the current hour is 09:00, users should be able to select 00-60 minutes.
        processedMinutes = processedMinutes.filter(minute => minute <= maxParts.minute);
      }
      /**
       * If ref day is after minimum
       * day do not render any hours/minute values
       */
    } else if (isAfter(refParts, maxParts)) {
      processedHours = [];
      processedMinutes = [];
      isAMAllowed = isPMAllowed = false;
    }
  }
  return {
    hours: processedHours,
    minutes: processedMinutes,
    am: isAMAllowed,
    pm: isPMAllowed
  };
};
/**
 * Given DatetimeParts, generate the previous,
 * current, and and next months.
 */
const generateMonths = refParts => {
  return [getPreviousMonth(refParts), {
    month: refParts.month,
    year: refParts.year,
    day: refParts.day
  }, getNextMonth(refParts)];
};
const getMonthColumnData = (locale, refParts, minParts, maxParts, monthValues, formatOptions = {
  month: 'long'
}) => {
  const {
    year
  } = refParts;
  const months = [];
  if (monthValues !== undefined) {
    let processedMonths = monthValues;
    if ((maxParts === null || maxParts === void 0 ? void 0 : maxParts.month) !== undefined) {
      processedMonths = processedMonths.filter(month => month <= maxParts.month);
    }
    if ((minParts === null || minParts === void 0 ? void 0 : minParts.month) !== undefined) {
      processedMonths = processedMonths.filter(month => month >= minParts.month);
    }
    processedMonths.forEach(processedMonth => {
      const date = new Date(`${processedMonth}/1/${year} GMT+0000`);
      const monthString = new Intl.DateTimeFormat(locale, Object.assign(Object.assign({}, formatOptions), {
        timeZone: 'UTC'
      })).format(date);
      months.push({
        text: monthString,
        value: processedMonth
      });
    });
  } else {
    const maxMonth = maxParts && maxParts.year === year ? maxParts.month : 12;
    const minMonth = minParts && minParts.year === year ? minParts.month : 1;
    for (let i = minMonth; i <= maxMonth; i++) {
      /**
       *
       * There is a bug on iOS 14 where
       * Intl.DateTimeFormat takes into account
       * the local timezone offset when formatting dates.
       *
       * Forcing the timezone to 'UTC' fixes the issue. However,
       * we should keep this workaround as it is safer. In the event
       * this breaks in another browser, we will not be impacted
       * because all dates will be interpreted in UTC.
       *
       * Example:
       * new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date('Sat Apr 01 2006 00:00:00 GMT-0400 (EDT)')) // "March"
       * new Intl.DateTimeFormat('en-US', { month: 'long', timeZone: 'UTC' }).format(new Date('Sat Apr 01 2006 00:00:00 GMT-0400 (EDT)')) // "April"
       *
       * In certain timezones, iOS 14 shows the wrong
       * date for .toUTCString(). To combat this, we
       * force all of the timezones to GMT+0000 (UTC).
       *
       * Example:
       * Time Zone: Central European Standard Time
       * new Date('1/1/1992').toUTCString() // "Tue, 31 Dec 1991 23:00:00 GMT"
       * new Date('1/1/1992 GMT+0000').toUTCString() // "Wed, 01 Jan 1992 00:00:00 GMT"
       */
      const date = new Date(`${i}/1/${year} GMT+0000`);
      const monthString = new Intl.DateTimeFormat(locale, Object.assign(Object.assign({}, formatOptions), {
        timeZone: 'UTC'
      })).format(date);
      months.push({
        text: monthString,
        value: i
      });
    }
  }
  return months;
};
/**
 * Returns information regarding
 * selectable dates (i.e 1st, 2nd, 3rd, etc)
 * within a reference month.
 * @param locale The locale to format the date with
 * @param refParts The reference month/year to generate dates for
 * @param minParts The minimum bound on the date that can be returned
 * @param maxParts The maximum bound on the date that can be returned
 * @param dayValues The allowed date values
 * @returns Date data to be used in ion-picker-column-internal
 */
const getDayColumnData = (locale, refParts, minParts, maxParts, dayValues, formatOptions = {
  day: 'numeric'
}) => {
  const {
    month,
    year
  } = refParts;
  const days = [];
  /**
   * If we have max/min bounds that in the same
   * month/year as the refParts, we should
   * use the define day as the max/min day.
   * Otherwise, fallback to the max/min days in a month.
   */
  const numDaysInMonth = getNumDaysInMonth(month, year);
  const maxDay = (maxParts === null || maxParts === void 0 ? void 0 : maxParts.day) !== null && (maxParts === null || maxParts === void 0 ? void 0 : maxParts.day) !== undefined && maxParts.year === year && maxParts.month === month ? maxParts.day : numDaysInMonth;
  const minDay = (minParts === null || minParts === void 0 ? void 0 : minParts.day) !== null && (minParts === null || minParts === void 0 ? void 0 : minParts.day) !== undefined && minParts.year === year && minParts.month === month ? minParts.day : 1;
  if (dayValues !== undefined) {
    let processedDays = dayValues;
    processedDays = processedDays.filter(day => day >= minDay && day <= maxDay);
    processedDays.forEach(processedDay => {
      const date = new Date(`${month}/${processedDay}/${year} GMT+0000`);
      const dayString = new Intl.DateTimeFormat(locale, Object.assign(Object.assign({}, formatOptions), {
        timeZone: 'UTC'
      })).format(date);
      days.push({
        text: dayString,
        value: processedDay
      });
    });
  } else {
    for (let i = minDay; i <= maxDay; i++) {
      const date = new Date(`${month}/${i}/${year} GMT+0000`);
      const dayString = new Intl.DateTimeFormat(locale, Object.assign(Object.assign({}, formatOptions), {
        timeZone: 'UTC'
      })).format(date);
      days.push({
        text: dayString,
        value: i
      });
    }
  }
  return days;
};
const getYearColumnData = (locale, refParts, minParts, maxParts, yearValues) => {
  var _a, _b;
  let processedYears = [];
  if (yearValues !== undefined) {
    processedYears = yearValues;
    if ((maxParts === null || maxParts === void 0 ? void 0 : maxParts.year) !== undefined) {
      processedYears = processedYears.filter(year => year <= maxParts.year);
    }
    if ((minParts === null || minParts === void 0 ? void 0 : minParts.year) !== undefined) {
      processedYears = processedYears.filter(year => year >= minParts.year);
    }
  } else {
    const {
      year
    } = refParts;
    const maxYear = (_a = maxParts === null || maxParts === void 0 ? void 0 : maxParts.year) !== null && _a !== void 0 ? _a : year;
    const minYear = (_b = minParts === null || minParts === void 0 ? void 0 : minParts.year) !== null && _b !== void 0 ? _b : year - 100;
    for (let i = maxYear; i >= minYear; i--) {
      processedYears.push(i);
    }
  }
  return processedYears.map(year => ({
    text: getYear(locale, {
      year,
      month: refParts.month,
      day: refParts.day
    }),
    value: year
  }));
};
/**
 * Given a starting date and an upper bound,
 * this functions returns an array of all
 * month objects in that range.
 */
const getAllMonthsInRange = (currentParts, maxParts) => {
  if (currentParts.month === maxParts.month && currentParts.year === maxParts.year) {
    return [currentParts];
  }
  return [currentParts, ...getAllMonthsInRange(getNextMonth(currentParts), maxParts)];
};
/**
 * Creates and returns picker items
 * that represent the days in a month.
 * Example: "Thu, Jun 2"
 */
const getCombinedDateColumnData = (locale, todayParts, minParts, maxParts, dayValues, monthValues) => {
  let items = [];
  let parts = [];
  /**
   * Get all month objects from the min date
   * to the max date. Note: Do not use getMonthColumnData
   * as that function only generates dates within a
   * single year.
   */
  let months = getAllMonthsInRange(minParts, maxParts);
  /**
   * Filter out any disallowed month values.
   */
  if (monthValues) {
    months = months.filter(({
      month
    }) => monthValues.includes(month));
  }
  /**
   * Get all of the days in the month.
   * From there, generate an array where
   * each item has the month, date, and day
   * of work as the text.
   */
  months.forEach(monthObject => {
    const referenceMonth = {
      month: monthObject.month,
      day: null,
      year: monthObject.year
    };
    const monthDays = getDayColumnData(locale, referenceMonth, minParts, maxParts, dayValues, {
      month: 'short',
      day: 'numeric',
      weekday: 'short'
    });
    const dateParts = [];
    const dateColumnItems = [];
    monthDays.forEach(dayObject => {
      const isToday = isSameDay(Object.assign(Object.assign({}, referenceMonth), {
        day: dayObject.value
      }), todayParts);
      /**
       * Today's date should read as "Today" (localized)
       * not the actual date string
       */
      dateColumnItems.push({
        text: isToday ? getTodayLabel(locale) : dayObject.text,
        value: `${referenceMonth.year}-${referenceMonth.month}-${dayObject.value}`
      });
      /**
       * When selecting a date in the wheel picker
       * we need access to the raw datetime parts data.
       * The picker column only accepts values of
       * type string or number, so we need to return
       * two sets of data: A data set to be passed
       * to the picker column, and a data set to
       * be used to reference the raw data when
       * updating the picker column value.
       */
      dateParts.push({
        month: referenceMonth.month,
        year: referenceMonth.year,
        day: dayObject.value
      });
    });
    parts = [...parts, ...dateParts];
    items = [...items, ...dateColumnItems];
  });
  return {
    parts,
    items
  };
};
const getTimeColumnsData = (locale, refParts, hourCycle, minParts, maxParts, allowedHourValues, allowedMinuteValues) => {
  const use24Hour = is24Hour(locale, hourCycle);
  const {
    hours,
    minutes,
    am,
    pm
  } = generateTime(refParts, use24Hour ? 'h23' : 'h12', minParts, maxParts, allowedHourValues, allowedMinuteValues);
  const hoursItems = hours.map(hour => {
    return {
      text: getFormattedHour(hour, use24Hour),
      value: getInternalHourValue(hour, use24Hour, refParts.ampm)
    };
  });
  const minutesItems = minutes.map(minute => {
    return {
      text: addTimePadding(minute),
      value: minute
    };
  });
  const dayPeriodItems = [];
  if (am && !use24Hour) {
    dayPeriodItems.push({
      text: getLocalizedDayPeriod(locale, 'am'),
      value: 'am'
    });
  }
  if (pm && !use24Hour) {
    dayPeriodItems.push({
      text: getLocalizedDayPeriod(locale, 'pm'),
      value: 'pm'
    });
  }
  return {
    minutesData: minutesItems,
    hoursData: hoursItems,
    dayPeriodData: dayPeriodItems
  };
};


/***/ }),

/***/ 99273:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-c4b11676.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ printRequiredElementError),
/* harmony export */   "b": () => (/* binding */ printIonError),
/* harmony export */   "p": () => (/* binding */ printIonWarning)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/**
 * Logs a warning to the console with an Ionic prefix
 * to indicate the library that is warning the developer.
 *
 * @param message - The string message to be logged to the console.
 */
const printIonWarning = (message, ...params) => {
  return console.warn(`[Ionic Warning]: ${message}`, ...params);
};
/*
 * Logs an error to the console with an Ionic prefix
 * to indicate the library that is warning the developer.
 *
 * @param message - The string message to be logged to the console.
 * @param params - Additional arguments to supply to the console.error.
 */
const printIonError = (message, ...params) => {
  return console.error(`[Ionic Error]: ${message}`, ...params);
};
/**
 * Prints an error informing developers that an implementation requires an element to be used
 * within a specific selector.
 *
 * @param el The web component element this is requiring the element.
 * @param targetSelectors The selector or selectors that were not found.
 */
const printRequiredElementError = (el, ...targetSelectors) => {
  return console.error(`<${el.tagName.toLowerCase()}> must be used inside ${targetSelectors.join(' or ')}.`);
};


/***/ }),

/***/ 50320:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-7670341c.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createColorClasses),
/* harmony export */   "g": () => (/* binding */ getClassMap),
/* harmony export */   "h": () => (/* binding */ hostContext),
/* harmony export */   "o": () => (/* binding */ openURL)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return typeof color === 'string' && color.length > 0 ? Object.assign({
    'ion-color': true,
    [`ion-color-${color}`]: true
  }, cssClassMap) : cssClassMap;
};
const getClassList = classes => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array.filter(c => c != null).map(c => c.trim()).filter(c => c !== '');
  }
  return [];
};
const getClassMap = classes => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = /*#__PURE__*/function () {
  var _ref = (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (url, ev, direction, animation) {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
      const router = document.querySelector('ion-router');
      if (router) {
        if (ev != null) {
          ev.preventDefault();
        }
        return router.push(url, direction, animation);
      }
    }
    return false;
  });
  return function openURL(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();


/***/ })

}]);
//# sourceMappingURL=9022.d748ac0b89078c85.js.map