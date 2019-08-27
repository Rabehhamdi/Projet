import React, { Component } from 'react'
import '../Style/css/meilleur.css'
export default class Meilleur extends Component {
    render() {
        return (
            <div className="rabeh"> 
                <h1 style={{background:'#fff', color:'red'}} >NOS ÉTUDIANTS EN PARLENT</h1>  
            <div id="scene"> 
                <div id="left-zone"> 
                    <ul class="list">     
                        <li class="item">
                            <input type="radio" id="x" name="basic_carousel" />
                            <label class="label_strawberry" for="x">strawberry</label>
                            <div class="content content_strawberry"><span class="picto"></span>
                                <h1>strawberry</h1>
                                <p>The garden strawberry (or simply strawberry /ˈstrɔːbᵊri/; Fragaria × ananassa) is a widely grown hybrid species of the genus Fragaria (collectively known as the strawberries)</p>
                            </div>
                        </li>
                        <li class="item">
                            <input type="radio" id="y" name="basic_carousel" />
                            <label class="label_banana" for="y">banana</label>
                            <div class="content content_banana"><span class="picto"></span>
                                <h1>banana</h1>
                                <p>A banana is an edible fruit, botanically a berry, produced by several kinds of large herbaceous flowering plants in the genus Musa.</p>
                            </div>
                        </li>
                        <li class="item">
                            <input type="radio" id="z" name="basic_carousel"  />
                            <label class="label_apple" for="z">apple</label>
                            <div class="content content_apple"><span class="picto"></span>
                                <h1>apple</h1>
                                <p>The apple tree (Malus domestica) is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus.</p>
                            </div>
                        </li>
                        <li class="item">
                            <input type="radio" id="e" name="basic_carousel" />
                            <label class="label_orange" for="e">orange</label>
                            <div class="content content_orange"><span class="picto"></span>
                                <h1>orange</h1>
                                <p>The orange (specifically, the sweet orange) is the fruit of the citrus species Citrus × sinensis in the family Rutaceae.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div id="middle-border"></div>
                <div id="right-zone"></div>
            </div> 
            </div >
        )
    }
}
