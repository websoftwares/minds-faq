import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.css']
})
export class FaqListComponent implements OnInit {

  readonly activeListItemClass = 'mdl-list__item--three-line'
  readonly defaultListItemClass = 'mdl-list__item'
  readonly defaultArrowIcon = 'fa-arrow-circle-right'
  readonly activeArrowIcon = 'fa-arrow-circle-down'

  items = [
    {
      ListItemIcon: this.defaultArrowIcon,
      listItemClass: this.defaultListItemClass,
      question: 'What is a Minds Token',
      answer: 'The Minds token is an Ethereum ERC-20 utility token that can be exchanged for services on the Minds network.',
      hidden: true,
    },
    {
      ListItemIcon: this.defaultArrowIcon,
      listItemClass: this.defaultListItemClass,
      question: 'How do I earn Minds Tokens',
      answer: 'To earn tokens on the platform, all you need to do is perform almost any normal action that one would do on a social media site.',
      hidden: true,
    },
    {
      ListItemIcon: this.defaultArrowIcon,
      listItemClass: this.defaultListItemClass,
      question: 'How do I spend Minds Tokens',
      answer: 'The utility tokens can be exchanged for services on the Minds network, including Boost, Wire and Plus.',
      hidden: true,
    }
  ]

  constructor() {
  }

  handleListItemClick(index) {

    for (let i = 0; i < this.items.length; i++) {
      if(i === index) {
        this.items[i].hidden = false
        this.items[i].listItemClass = `${this.defaultListItemClass} ${this.activeListItemClass}`
        this.items[i].ListItemIcon = this.activeArrowIcon
      } else {
        this.items[i].hidden = true
        this.items[i].listItemClass =  this.defaultListItemClass
        this.items[i].ListItemIcon = this.defaultArrowIcon
      }
    }

  }

  ngOnInit() {
  }
}
