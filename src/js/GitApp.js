'use strict'

import { } from "isomorphic-git";

export default class GitApp {

    constructor() {

    }

    run() {
        git.config({
            fs: "IndexedDB",
            options: {

            }
        }).then((v) => {
            console.log("config successful", v);
        }, (e) => {
            console.error(e);
        });
    }

}
