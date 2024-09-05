class Shape{
    constructor(){
        this.color=''
    }
    setColor(color){
        this.color=(color)
    }
}

class Circle extends Shape{
    render(){
        '<circle cx="150" cy="100" r="80" fill=`${this.color}` />'
    }
}

class Triangle extends Shape{
    render(){
        '<polygon points="150, 18 244, 182 56, 182" fill=`${this.color}` />'
    }
}

class Square extends Shape{
    render(){
        '<rect x="50" height="200" width="200" fill=`${this.color}` />'
    }
}

module.exports = {Circle, Triangle, Square}