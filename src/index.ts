namespace StringTemp {
  export type Data = Record<string, string>;
}

class StringTemp {
  private _right: string;
  private _left: string;

  public constructor(left: string, right: string) {
    this._left = left;
    this._right = right;
  }

  public inject(str: string, data: StringTemp.Data): string {
    if (typeof str === "string" && data instanceof Array) {
      return str.replace(
        new RegExp(`(${this._left}d${this._right})`, "g"),
        (i) => {
          return data[
            i
              .replace(new RegExp(this._left), "")
              .replace(new RegExp(this._right), "")
          ];
        }
      );
    } else if (typeof str === "string" && data instanceof Object) {
      if (Object.keys(data).length === 0) {
        return str;
      }

      for (let key in data) {
        return str.replace(
          new RegExp(`(${this._left}([^}]+)${this._right})`, "g"),
          (i) => {
            let key = i
              .replace(new RegExp(this._left), "")
              .replace(new RegExp(this._right), "");
            if (!data[key]) {
              return i;
            }

            return data[key];
          }
        );
      }
    } else if (
      (typeof str === "string" && data instanceof Array === false) ||
      (typeof str === "string" && data instanceof Object === false)
    ) {
      return str;
    } else {
      return "";
    }
  }
}

export default StringTemp;
