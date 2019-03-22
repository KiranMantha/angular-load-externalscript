import { Component, Input } from '@angular/core';


// Service
import { DynamicScriptLoaderService } from './dynamic-script-loader.service';

declare var Decimal: any;

@Component({
  selector: 'hello',
  template: `<h1>Result: {{result}}</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  result = false;

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService){}

  ngOnInit() {
    this.loadChartScripts()
  }
  
  private loadChartScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('decimaljs').then(data => {

      let x = new Decimal(123.4567);
      let y = new Decimal('123456.7e-3');
      let z = new Decimal(x);

      this.result = x.equals(y) && y.equals(z) && x.equals(z); 

      // Script Loaded Successfully
    }).catch(error => console.log(error));
  }
}
