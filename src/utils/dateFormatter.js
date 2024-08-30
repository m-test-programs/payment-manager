import { format } from "date-fns";

export default function dateFormatter(date) {
  if (!date) {
    return;
  }
  return format(new Date(date), "dd.MM.yyyy");
}
