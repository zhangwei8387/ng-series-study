import { Component } from '@angular/core';
import 'codemirror/mode/javascript/javascript';
@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  code = `<div class="container">
  <h1>Hero Form</h1>
  <form>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" required>
    </div>
    <button type="submit" class="btn btn-success">Submit</button>

  </form>
</div>`;
  codemirrorConfig = {
    theme: 'seti',
    readOnly: true,
  };

  onFocus() {

  }
  onBlur() {

  }
}
