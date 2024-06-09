// Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання
interface UnionIndex {
  [key: string]: number | string;
}

// Створіть інтерфейс, у якому типи значень у сигнатурі індексу є функціями
interface FunctionIndex {
  [key: string]: (...args: any[]) => any;
}

// Створіть інтерфейс з певними властивостями та індексною сигнатурою
interface DynamicProperties {
  name: string;
  [key: string]: any;
}

// Створіть два інтерфейси, один з індексною сигнатурою, а інший розширює перший, додаючи специфічні властивості
interface BaseInterface {
  [key: string]: string;
}

interface ExtendedInterface extends BaseInterface {
  additionalProperty: string;
}

// Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє, чи відповідають значення певних ключів певним критеріям
function checkValues(obj: { [key: string]: number }, keys: string[]): boolean {
  return keys.every((key) => typeof obj[key] === "number");
}
