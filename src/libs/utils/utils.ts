import moment from 'moment';

export const startOfDay = (date: Date) => moment(date).startOf('day').toISOString();
