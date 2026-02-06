/// КЛАССЫ ПОЗВОЛЯЮТ СОЗДАВАТЬ ПРОТОТИПЫ ДЛЯ ОБЪЕКТОВ

/// НА ОСНОВАНИИ ПРОТОТИПОВ СОЗДАЮТСЯ ЭКЗЕМПЛЯРЫ

/// ЭКЗЕМПЛЯРЫ МОГУТ ИМЕТЬ СОБСТВЕННЫЕ СВОЙСТВА И МЕТОДЫ

/// ЭКЗЕМПЛЯРЫ НАСЛЕДУЮТ СВОЙСТВА И МЕТОДЫ ПРОТОТИПОВ



class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        return this.votesQty += 1
    }

    static mergeComments(first, second) {
        return `${first} ${second}`
    }
}

const firstComment = new Comment('First comment')
const secondComment = new Comment("Second comment");

Comment.mergeComments('First comment.', 'Second comment.')

/// Проверка принадлежности 
// console.log(firstComment instanceof Comment);
// console.log(firstComment instanceof Object);


// firstComment.upvote()
// console.log(firstComment.votesQty)

// firstComment.upvote();
// console.log(firstComment.votesQty);