import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book1',
  templateUrl: 'book1.page.html',
  styleUrls: ['book1.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public coverPage = {
    title: "Book Title (Cover Page)",
    url: "/coverpage"
  };

  public toc = {
    title: "Table of Contents",
    url: "/toc"
  };

  public items: Array<{ title: string; note: string; icon: string, url: string }> = [];
  constructor() {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Chapter ' + i,
        note: 'Chapter ' + i + ' is about ...',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)],
        url: "/chapter" + i
      });
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
