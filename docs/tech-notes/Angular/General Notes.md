## Angular forms

###### What is formControl and controlValueAccessor [ website](https://indepth.dev/posts/1055/never-again-be-confused-when-implementing-controlvalueaccessor-in-angular-forms)
---
[ControlValueAccessor .](https://angular.io/api/forms/ControlValueAccessor) Este es el objeto que se encuentra entre Angular `formControl`y un control de formulario nativo y sincroniza los valores entre los dos.
## Implementando accesor de valor personalizado
---
Implementar un descriptor de acceso de valor personalizado no es difícil. Requiere 2 sencillos pasos:

1.  registrar un `NG_VALUE_ACCESSOR`proveedor
2.  implementar `ControlValueAccessor`métodos de interfaz

```js 
@Component({
  selector: 'ngx-jquery-slider',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NgxJquerySliderComponent,
    multi: true
  }]
  ...
})
class NgxJquerySliderComponent implements ControlValueAccessor {...}
```

[forward ref](https://indepth.dev/posts/1133/what-is-forwardref-in-angular-and-why-we-need-it)
[run app demo](https://plnkr.co/edit/c3tUH819er2gA9ertQS6?p=preview&preview)