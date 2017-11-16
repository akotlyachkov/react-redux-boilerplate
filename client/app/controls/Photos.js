import React, { Component } from "react";
export default class Photos extends Component {
    onYearBtnClick(e) {
        this.props.getPhotos(+e.target.innerText);
    }
    render() {
        const { year, photos, fetching, error } = this.props;
        const years = [2016, 2015, 2014, 2013, 2012, 2011, 2010];
        return (React.createElement("div", { className: 'ib page' },
            React.createElement("p", null, years.map((item, index) => React.createElement("button", { className: 'btn', key: index, onClick: this.onYearBtnClick }, item))),
            React.createElement("h3", null,
                year,
                " \u0433\u043E\u0434 [",
                photos.length,
                "]"),
            error ? React.createElement("p", { className: 'error' }, " \u0412\u043E \u0432\u0440\u0435\u043C\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0444\u043E\u0442\u043E \u043F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430") : '',
            fetching ?
                React.createElement("p", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")
                :
                    photos.map((entry, index) => React.createElement("div", { key: index, className: 'photo' },
                        React.createElement("p", null,
                            React.createElement("img", { src: entry.src })),
                        React.createElement("p", null,
                            entry.likes.count,
                            " \u2764")))));
    }
}
//# sourceMappingURL=Photos.js.map