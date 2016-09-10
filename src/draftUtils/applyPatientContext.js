// @flow
import type { Patient } from 'store';

function applyPatientContext(text: string, patient: Patient) {
  const matchResult = patient.dob.match(/(\d\d\d\d)\-(\d\d)\-(\d\d)/);
  const [, year, month, day] = (matchResult && matchResult.length >= 4
    ? matchResult
    : ['', '1900', '01', '01']);
  const currentTime = new Date();
  const age = currentTime.getFullYear() - parseInt(year, 10) - (
    currentTime.getMonth() + 1 >= parseInt(month, 10) && currentTime.getDate() >= parseInt(day, 10)
      ? 0
      : 1
  );

  return text.replace(
    /~(.*?)~/g,
    function name(match, $1: string): string {
      return $1
        .replace(/(he)\/(she)/gi, patient.gender === 'm' ? '$1' : '$2')
        .replace(/(him)\/(her)/gi, patient.gender === 'm' ? '$1' : '$2')
        .replace(/(his)\/(her)/gi, patient.gender === 'm' ? '$1' : '$2')
        .replace(/(male)\/(female)/gi, patient.gender === 'm' ? '$1' : '$2')
        .replace(/(mr)\/(ms)/gi, patient.gender === 'm' ? '$1' : '$2')
        .replace(/age/gi, `${age}`)
        .replace(/dd/gi, `${currentTime.getDate()}`)
        .replace(/fn/gi, patient.firstName)
        .replace(/ln/gi, patient.lastName)
        .replace(/mm/gi, `${currentTime.getMonth() + 1}`)
        .replace(/yyyy/gi, `${currentTime.getFullYear()}`);
    }
  );
}

export default applyPatientContext;
