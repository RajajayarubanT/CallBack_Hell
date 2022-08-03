

let CountDown = 10

let result_container = document.querySelector('#result-container')



function Callback() {


    if (CountDown && CountDown - 1) {
        CountDown--;
        result_container.innerHTML = CountDown
    }
    else {
        result_container.innerHTML = 'Happy Independence Day'
    }

}

function firstCall(callback) {

    setTimeout(() => { //1
        callback()
        setTimeout(() => { //2
            callback()
            setTimeout(() => { //3
                callback()
                setTimeout(() => { //4
                    callback()
                    setTimeout(() => { //5
                        callback()
                        setTimeout(() => { //6
                            callback()
                            setTimeout(() => { //7
                                callback()
                                setTimeout(() => { //8
                                    callback()
                                    setTimeout(() => { //9
                                        callback()
                                        setTimeout(() => { //10
                                            callback()
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)

}

firstCall(Callback)