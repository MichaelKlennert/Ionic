import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public coverPage = {
    title: "Book Title (Cover Page)",
    url: "/coverpage"
  };

  public toc = {
    title: "Table of Contents",
    url: "/toc"
  };

  public items: Array<{ title: string; icon: string, url: string }> = [];
  constructor() {
    this.items.push({
      title: "Cover Page",
      icon: "finger-print",
      url: "/coverpage"
    });
    console.log(this.items);
    this.items.push({
      title: "Table of Contents",
      icon: "list",
      url: "/toc"
    });
    for (let i = 3; i < 13; i++) {
      this.items.push({
        title: 'Chapter ' + (i - 2),
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
