import React, { useState, useEffect, Component } from 'react';

// import rd3 from 'react-d3-library';
// import node from 'd3file';
import * as d3 from 'd3';
import { scaleLinear } from 'd3-scale';
import { Form, FormGroup, Button, Alert } from 'react-bootstrap';
import type { Pie } from 'd3';

const COMPLETE_ANGLE = 360;
const STRAIGT_ANGLE = 180;
var padding = {
    top: 20,
    right: 40,
    bottom: 0,
    left: 0
}
const w = 500 - padding.left - padding.right;
const h = 500 - padding.top - padding.bottom;
const r = Math.min(w, h) / 2;
// const RD3Component = rd3.Component;

var data = [
    { "label": "Dell LAPTOP", "value": 1, "question": "What CSS property is used for specifying the area between the content and its border?" }, // padding
    { "label": "IMAC PRO", "value": 2, "question": "What CSS property is used for changing the font?" }, //font-family
    { "label": "SUZUKI", "value": 3, "question": "What CSS property is used for changing the color of text?" }, //color
    { "label": "HONDA", "value": 4, "question": "What CSS property is used for changing the boldness of text?" }, //font-weight
    { "label": "FERRARI", "value": 5, "question": "What CSS property is used for changing the size of text?" }, //font-size
    { "label": "APARTMENT", "value": 6, "question": "What CSS property is used for changing the background color of a box?" }, //background-color
    { "label": "IPAD PRO", "value": 7, "question": "Which word is used for specifying an HTML tag that is inside another tag?" }, //nesting
    { "label": "LAND", "value": 8, "question": "Which side of the box is the third number in: margin:1px 1px 1px 1px; ?" }, //bottom
    { "label": "MOTOROLLA", "value": 9, "question": "What are the fonts that don't have serifs at the ends of letters called?" }, //sans-serif
    { "label": "BMW", "value": 10, "question": "With CSS selectors, what character prefix should one use to specify a class?" }
];
export const CopyWheel: React.FC = () => {
    // const [d3, setD3] = useState(node);
    const [color, setColor] = useState(d3.scaleOrdinal().category20());
    const [rotation, setRotation] = useState(0);
    const [oldRotation, setOldRotation] = useState(0);
    const [picked, setPicked] = useState(100000);
    const [oldPick, setOldPick] = useState<number[]>([]);

    // componentDidMount() {
        
    // }

    useEffect(() => {
        draw();
    })

    function rotTween(_: any) {
        var i = d3.interpolate(oldRotation % 360, rotation);
        return function (t: number) {
            return "rotate(" + i(t) + ")";
        };
    }

    function getRandomNumbers() {
        var array = new Uint16Array(1000);
        var scale = scaleLinear().range([360, 1440]).domain([0, 100000]);
        if (window.hasOwnProperty("crypto") && typeof window.crypto.getRandomValues === "function") {
            window.crypto.getRandomValues(array);
            console.log("works");
        } else {
            //no support for crypto, get crappy random numbers
            for (var i = 0; i < 1000; i++) {
                array[i] = Math.floor(Math.random() * 100000) + 1;
            }
        }
        return array;
    }

    const draw = () => {
        var svg = d3.select('#chart')
        .append("svg")
        .data([data])
        .attr("width", w + padding.left + padding.right)
        .attr("height", h + padding.top + padding.bottom);
    var container = svg.append("g")
        .attr("class", "chartholder")
        .attr("transform", "translate(" + (w / 2 + padding.left) + "," + (h / 2 + padding.top) + ")");
    var vis = container
        .append("g");

    var pie = d3.pie().sort(null).value(function (_d) { return 1; });
    // declare an arc generator function
    // var arc = d3.svg,arc().outerRadius(r);
    var arc = d3.arc().outerRadius(r);
    // select paths, use arc generator to draw

    var pieTemp = pie as unknown as unknown[];
    var arcs = vis.selectAll("g.slice")
        .data(pieTemp)
        .enter()
        .append("g")
        .attr("class", "slice");

    arcs.append("path")
        .attr("fill", function (d, i) { return color(i); })
        .attr("d", function (d: any) { return arc(d); });
    // add the text
    arcs.append("text").attr("transform", function (d: any) {
        d.innerRadius = 0;
        d.outerRadius = r;
        d.angle = (d.startAngle + d.endAngle) / 2;
        return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius - 10) + ")";
    })
        .attr("text-anchor", "end")
        .text(function (d, i) {
            return data[i].label;
        });
    container.on("click", spin);
    function spin(d: any) {

        container.on("click", null);
        //all slices have been seen, all done
        console.log("OldPick: " + oldPick.length, "Data length: " + data.length);
        if (oldPick.length == data.length) {
            console.log("done");
            container.on("click", null);
            return;
        }
        var ps = 360 / data.length,
            pieslice = Math.round(1440 / data.length),
            rng = Math.floor((Math.random() * 1440) + 360);

        setRotation(Math.round(rng / ps) * ps);

        setPicked(Math.round(data.length - (rotation % 360) / ps));
        const tempPicked = picked >= data.length ? (picked % data.length) : picked;
        setPicked(tempPicked);
        if (oldPick.indexOf(picked) !== -1) {
            d3.select(this).call(spin);
            return;
        } else {
            oldPick.push(picked);
        }
        const rotationOffsetTemp = 90 - Math.round(ps / 2);
        setRotation(rotation + rotationOffsetTemp);
        vis.transition()
            .duration(3000)
            .attrTween("transform", rotTween)
            .each("end", function () {
                //mark question as seen
                d3.select(".slice:nth-child(" + (picked + 1) + ") path")
                    .attr("fill", "#111");
                //populate question
                d3.select("#question h1")
                    .text(data[picked].question);
                setOldRotation(rotation);

                /* Get the result value from object "data" */
                console.log(data[picked].value)

                /* Comment the below line for restrict spin to sngle time */
                container.on("click", spin);
            });
    }
    //make arrow
    svg.append("g")
        .attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h / 2) + padding.top) + ")")
        .append("path")
        .attr("d", "M-" + (r * .15) + ",0L0," + (r * .05) + "L0,-" + (r * .05) + "Z")
        .style({ "fill": "black" });
    //draw spin circle
    container.append("circle")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 60)
        .style({ "fill": "white", "cursor": "pointer" });
    //spin text
    container.append("text")
        .attr("x", 0)
        .attr("y", 15)
        .attr("text-anchor", "middle")
        .text("SPIN")
        .style({ "font-weight": "bold", "font-size": "30px" });


    }

    return(
        <div>
            Copy wheel
        </div>
    )



}
