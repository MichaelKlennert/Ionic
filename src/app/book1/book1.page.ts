import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book1',
  templateUrl: 'book1.page.html',
  styleUrls: ['book1.page.scss']
})
export class ListPage implements OnInit {

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
    this.items.push({
      title: "Cover Page",
      note: "Cover Page",
      icon: "eye",
      url: "/coverpage"
    });
    console.log(this.items);
    this.items.push({
      title: "Table of Contents",
      note: "Table of Contents",
      icon: "list",
      url: "/toc"
    });
    for (let i = 3; i < 11; i++) {
      this.items.push({
        title: 'Chapter ' + (i - 2),
        note: 'Chapter ' + (i - 2) + ' is about ...',
        icon: "book",
        url: "/chapter" + (i - 2)
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
