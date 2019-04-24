import {Component} from '@angular/core';


/*

  ng serve with tsconfig.json targetting es2015 throw :
  Uncaught ReferenceError: ParentComponent is not defined

  1. In ParentComponent I have @ViewChild(ChildComponent)

  2. On ChildComponent's constructor I have
  constructor( @Inject(forwardRef(() => ParentComponent))  private parent:ParentComponent)

  Target es5 everything is ok!
  N.B. If you remove circular dependencies types
    or in constructor (:ParentComponent) or in viewchild (:ChildComponent)
    it works!

 */



@Component({
  selector: 'app-root',
  template: `<app-parent></app-parent>`
})
export class AppComponent {}
