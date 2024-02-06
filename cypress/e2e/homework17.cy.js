const booksResponse = {
            isbn: "9781449325862",
            title: "Git Pocket bla bla bla Guide",
            subTitle: "Introduction to bla bla bla",
            author: "Anastasiia Klachun",
            publish_date: "2020-06-04T08:48:39.000Z",
            publisher: "O'Reilly Media",
            pages: 12,
            description: "This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git exp",
            website: "http://chimera.labs.oreilly.com/books/1230000000561/index.html"
};




describe('network', () => {
    it('can stub server responses for book 1t', () => {
        cy.intercept('GET', '/BookStore/v1/Book?ISBN=9781449325862', booksResponse).as('changeBook');
        cy.visit('/books?book=9781449325862');
        cy.get('#subtitle-wrapper').should('contain', 'Introduction to bla bla bla');
    });


    it('should make a request to get book details', () => {
            const isbn = '9781449325862';
            cy.request({
                method: 'GET', url: `/BookStore/v1/Book?ISBN=${isbn}`
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('isbn', isbn);
                expect(response.body).to.have.property('title');
                expect(response.body).to.have.property('author');
            });
        });
});

