export class Book {
  constructor(
        public title: string,
        public author?: string,
        public image?: string,
        public description?: string,
        public pageCount?: string,
        public isbn?: string,
        public bookId?: string,
        public userId?: string,
        public owner?: string,
        public requester?: string,
        public requesterId?: string,
        public tradeId?: string
  ) {}
}
