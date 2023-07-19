``` javascript 
import { SimpleChanges } from "@angular/core";

export const Required = (target: unknown, propertyKey: string): void => {
    Object.defineProperty(target, propertyKey, {
        get() {
            throw new Error(`Attribute ${propertyKey} is required!`);
        },
        set(value) {
            Object.defineProperty(target, propertyKey, {
                value,
                writable: true,
                configurable: true,
            });
        },
        configurable: true,
    });
};


export enum ChangesStrategy {
    Each = 'each',
    First = 'first',
    NonFirst = 'nonfirst'
}


export function TrackChanges<Type>(key: string, methodName: string, strategy: ChangesStrategy = ChangesStrategy.Each): Function {
    return function (targetClass: any, functionName: string, descriptor: any): Function {
        const source = descriptor.value;
        descriptor.value = function (changes: SimpleChanges): Function {
            if (changes && changes[key] && changes[key].currentValue !== undefined) {
                const isFirstChange = changes[key].firstChange;
                if (strategy === ChangesStrategy.Each ||
                    (strategy === ChangesStrategy.First && isFirstChange) ||
                    (strategy === ChangesStrategy.NonFirst && !isFirstChange)) {
                    if (targetClass[methodName]) {
                        targetClass[methodName].call(this, changes[key].currentValue as Type);
                    } else {
                        throw Error('Does not exist function with name: ' + methodName);
                    }
                }
            }
            return source.call(this, changes);
        };
        return descriptor;
    };
}



export function OutsideZone(targetClass, functionName: string, descriptor) {
    const source = descriptor.value;
    descriptor.value = function (...data): Function {
        console.log(this);
        if (!this.ngZone) {
            throw new Error("Class with 'OutsideZone' decorator should have 'ngZone' class property with 'NgZone' class. Please add { private ngZone: NgZone } in constructor");
        }
        return this.ngZone.runOutsideAngular(() => source.call(this, ...data));
    };
    return descriptor;
}

enum StorageType {
    Local = "local"
}


export function Storage<Type>(key: string, storageType: StorageType = StorageType.Local, defaultValue: Type): Function {
  return (target: object, propName: string) => {
    let _val: Type = target[propName];
    Object.defineProperty(
      target,
      propName, {
        get(): Type | unknown {
          if (_val) {
            return _val;
          }
          let item = localStorage.getItem(key);
          if (!item) {
            item = defaultValue as any;
            _val = defaultValue;
            localStorage.setItem(key, JSON.stringify(item));
          }
          return item;
        },
        set(item: Type): void {
          _val = item;
          localStorage.setItem(key, JSON.stringify(item));
        }
      }
    );
  };
}


// no entra en set cuando seteas un objecto interno, solo cuando seteas el objeto en si
function DelayTimeSet<T>(delay: number = 10): Function {
  return (target: object, propName: string) => {
    let _val: T = (target as any)[propName];
    Object.defineProperty(
      target,
      propName, {
      get() {
        return _val;
      },
      set(item) {
        setTimeout(() => {
          console.log('debug set value')
          _val = item;
        }, delay);
      }
    }
    );
  };
}

```