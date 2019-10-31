import {
  CalendarDateFormatterInterface,
  DateFormatterParams
} from './calendar-date-formatter.interface';
//import getISOWeek from 'date-fns/get_iso_week/index';
import {
  getISOWeek
} from 'date-fns';
import { DatePipe } from '@angular/common';

/**
 * This will use the angular date pipe to do all date formatting. It is the default date formatter used by the calendar.
 */
export class CalendarAngularDateFormatter
  implements CalendarDateFormatterInterface {
  /**
   * The month view header week day labels
   */
  public monthViewColumnHeader({ date, locale }: DateFormatterParams): string {
    //return new DatePipe(locale).transform(date, 'EEEE', locale);
    return new DatePipe(locale).transform(date, 'EEEE');
  }

  /**
   * The month view cell day number
   */
  public monthViewDayNumber({ date, locale }: DateFormatterParams): string {
    //return new DatePipe(locale).transform(date, 'd', locale);
    return new DatePipe(locale).transform(date, 'd');
  }

  /**
   * The month view title
   */
  public monthViewTitle({ date, locale }: DateFormatterParams): string {
    //return new DatePipe(locale).transform(date, 'MMMM y', locale);
    return new DatePipe(locale).transform(date, 'MMMM y');
  }

  /**
   * The week view header week day labels
   */
  public weekViewColumnHeader({ date, locale }: DateFormatterParams): string {
    //return new DatePipe(locale).transform(date, 'EEEE', locale);
    return new DatePipe(locale).transform(date, 'EEEE');
  }

  /**
   * The week view sub header day and month labels
   */
  public weekViewColumnSubHeader({
    date,
    locale
  }: DateFormatterParams): string {
    return new DatePipe(locale).transform(date, 'MMM d');
    //return new DatePipe(locale).transform(date, 'MMM d', locale);
  }

  /**
   * The week view title
   */
  public weekViewTitle({ date, locale }: DateFormatterParams): string {
    //const year: string = new DatePipe(locale).transform(date, 'y', locale);
    const year: string = new DatePipe(locale).transform(date, 'y');
    const weekNumber: number = getISOWeek(date);
    return `Week ${weekNumber} of ${year}`;
  }

  /**
   * The time formatting down the left hand side of the day view
   */
  public dayViewHour({ date, locale }: DateFormatterParams): string {
    //return new DatePipe(locale).transform(date, 'h a', locale);
    return new DatePipe(locale).transform(date, 'h a');
  }

  /**
   * The day view title
   */
  public dayViewTitle({ date, locale }: DateFormatterParams): string {
    //return new DatePipe(locale).transform(date, 'EEEE, MMMM d, y', locale);
    return new DatePipe(locale).transform(date, 'EEEE, MMMM d, y');
  }
}
