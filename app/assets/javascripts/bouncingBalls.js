var canvas = {
    element: document.getElementById('canvas'),
    width: 600,
    height: 800,
    initialize: function () {
        this.element.style.width = this.width + 'px';
        this.element.style.height = this.height + 'px';
        document.body.appendChild(this.element);
    }
};

var Ball = {
    create: function (color, dx, dy, margin) {
        var newBall = Object.create(this);
        newBall.dx = dx;
        newBall.dy = dy;
        newBall.width = 40;
        newBall.height = 40;
        newBall.element = document.createElement('div');
        newBall.element.style.backgroundColor = color;
        newBall.element.style.width = newBall.width + 'px';
        newBall.element.style.height = newBall.height + 'px';
        newBall.element.style.marginLeft = margin + 'px';
        newBall.element.className += ' ball';
        newBall.width = parseInt(newBall.element.style.width);
        newBall.height = parseInt(newBall.element.style.height);
        canvas.element.appendChild(newBall.element);
        return newBall;
    },
    moveTo: function (x, y) {
        this.element.style.left = x + 'px';
        this.element.style.top = y + 'px';
    },
    changeDirectionIfNecessary: function (x, y) {
        if (x < 0 || x > canvas.width - this.width) {
            this.dx = -this.dx;
        }
        if (y < 0 || y > canvas.height - this.height) {
            this.dy = -this.dy;
        }
    },
    draw: function (x, y) {
        this.moveTo(x, y);
        var ball = this;
        setTimeout(function () {
            ball.changeDirectionIfNecessary(x, y);
            ball.draw(x + ball.dx, y + ball.dy);
        }, 1000 / 60);
    }
};

canvas.initialize();
var ball1 =  Ball.create("blue", 0, 5, 400);
var ball2 =  Ball.create("red", 1, 5, 100);
var ball3 =  Ball.create("green", 2, 2, 40);
var ball4 =  Ball.create("blue", 2, 3, 500);
var ball5 =  Ball.create("red", 3, 5, 50);
var ball6 =  Ball.create("green", 2, 4, 500);
var ball7 =  Ball.create("blue", 4, 2, 60);
var ball8 =  Ball.create("red", 1, 3, 80);
var ball9 =  Ball.create("green", 1, 2, 200);
var ball10 =  Ball.create("blue", 5, 4, 300);
var ball11 =  Ball.create("red", 2, 5, 400);
var ball12 =  Ball.create("green", 3, 4, 600);
ball1.draw(600, 600);
ball2.draw(20, 200);
ball3.draw(300, 330);
ball4.draw(80, 0);
ball5.draw(30, 200);
ball6.draw(400, 330);
ball7.draw(100, 0);
ball8.draw(60, 200);
ball9.draw(250, 330);
ball10.draw(20, 100);
ball11.draw(60, 150);
ball12.draw(300, 380);
