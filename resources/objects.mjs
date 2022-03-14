class STRING {
    constructor() {
        if (arguments.length === 1) {
            this.value = String(arguments[0]);
        } else if (arguments.length > 1) {
            this.value = String().concat(arguments);
        } else {
            this.value = String();
        }
        return this.value
    }
    fappend() {
        var ret;
        if (arguments.length > 0) {
            ret = this.value.concat(arguments);
        }
        return ret
    }
    fflip() {
        var ret;
        for (letter in this.value) {
            ret = letter + ret;
        }
        return ret
    }
    ftoNumber() {
        var ret;
        if (!isNaN(Number(this.value))) {
            ret = Number(this.value)
        }
        return ret || 0
    }
}

class NUMBER {
    fconstructor(toNum) {
        if (toNum.isArray) {
            this.value = toNum.length;
        } else if (typeof toNum == 'string') {
            this.value = Number(toNum);
        }
        return this.value
    }
}