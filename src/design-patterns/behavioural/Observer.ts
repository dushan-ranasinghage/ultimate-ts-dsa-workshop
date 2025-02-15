/**
 * @file Observer.ts
 * @description
 * @author Dushan Ranasinghage
 * @copyright Copyright 2024 - ResearchIt All Rights Reserved.
 */

interface IPublisher {}

class Publisher implements IPublisher {
  private subscriptions: Subscriber[] = [];

  private newsPapers: NewsPaper[] = [];

  get newsPaper(): NewsPaper {
    return this.newsPapers.reduce((latest, current) => {
      const latestDate = new Date(latest.date);
      const currentDate = new Date(current.date);

      // Return the newspaper with the later date
      return latestDate > currentDate ? latest : current;
    });
  }

  subscribe(subscriber: Subscriber): void {
    const foundSubscriber = this.subscriptions.find(
      (s: Subscriber) => s.id === subscriber.id
    );

    if (foundSubscriber) {
      console.log("Already subscribed!");
    } else {
      this.subscriptions.push(subscriber);
    }
  }

  unsubscribe(subscriber: Subscriber): boolean {
    const foundIndex: number = this.subscriptions.findIndex(
      (s: Subscriber) => s.id === subscriber.id
    );

    if (foundIndex) {
      this.subscriptions.splice(foundIndex, 1);
      return true;
    } else {
      return false;
    }
  }

  notify(): void {
    this.subscriptions.map((s: Subscriber) => {
      s.update(this);
    });
  }

  releaseNewsPaper(newsPaper: NewsPaper): void {
    this.newsPapers.push(newsPaper);
    this.notify();
  }
}

class Subscriber {
  id: number;

  name: string;

  newsPaper: NewsPaper;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  update(publisher: Publisher): void {
    this.newsPaper = publisher.newsPaper;
  }
}

class NewsPaper {
  date: Date;

  constructor(date: Date) {
    this.date = date;
  }
}

// USAGE

const newYorkTimes = new Publisher();

const dushanSub = new Subscriber(1, "Dushan");
const malkiSub = new Subscriber(2, "Malki");

newYorkTimes.subscribe(dushanSub);
newYorkTimes.subscribe(malkiSub);

newYorkTimes.releaseNewsPaper(new NewsPaper(new Date("2024-04-09")));

console.log(dushanSub);
console.log(malkiSub);
