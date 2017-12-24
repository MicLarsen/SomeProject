import React, { Component } from 'react'

module.exports = class A1_Components extends Component {

    render() {
        let line1 = "if (!Array.prototype.first) {"
        let line2 = "   Array.prototype.first = function () {"
        let line3 = "       return this[0]"
        let line4 = "   }"
        let line5 = "}"
        let line6 = "if (!Array.prototype.upCase) {"
        let line7 = "   Array.prototype.upCase = function () {"
        let line8 = "       let temp = []"
        let line9 = "       for (var i = 0; i < this.length; i++) {"
        let line10 = "          temp.push(this[i].toUpperCase())"
        let line11 = "          }"
        let line12 = "  return temp"
        let line13 = "  }"
        let line14 = "}"
        let line15 = "if (!Array.prototype.filterMe) {"
        let line16 = "  Array.prototype.filterMe = function () {"
        let line17 = "      let temp = []"
        let line18 = "      for (var i = 0; i < this.length; i++) {"
        let line19 = "          if (this[i].length <= 3) {"
        let line20 = "              temp.push(this[i])"
        let line21 = "          }"
        let line22 = "      }"
        let line23 = "  return temp"
        let line24 = "  }"
        let line25 = "}"
        return (
            <div className="full">
                <div className="thirds">
                    <p>{line1}</p>
                    <p>{line2}</p>
                    <p>{line3}</p>
                    <p>{line4}</p>
                    <p>{line5}</p>
                    <p>{line6}</p>
                </div>
                <div className="thirds">
                    <p>{line7}</p>
                    <p>{line8}</p>
                    <p>{line9}</p>
                    <p>{line10}</p>
                    <p>{line11}</p>
                    <p>{line12}</p>
                    <p>{line13}</p>
                    <p>{line14}</p>
                    <p>{line15}</p>
                </div>
                <div className="thirds"
                >
                    <p>{line16}</p>
                    <p>{line17}</p>
                    <p>{line18}</p>
                    <p>{line19}</p>
                    <p>{line20}</p>
                    <p>{line21}</p>
                    <p>{line22}</p>
                    <p>{line23}</p>
                    <p>{line24}</p>
                    <p>{line25}</p>
                </div>
            </div>
        )
    }
}


