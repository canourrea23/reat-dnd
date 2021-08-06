import React, { Component } from "react";
// Let's name a function and we'll go write it in the next step
import { getDetails } from "../../services/api-calls";

class ClassDetails extends Component {
    state = {
        // This is where we use the state passed in via location!
        classDetails: {},
        url: this.props.location.state.classTitle.url,
    };

    async componentDidMount() {
        // Call the API function we just set up
        const classDetails = await getDetails(this.state.url);
        // Then set state!
        this.setState({ classDetails });
    }

    render() {
        const { classDetails } = this.state;
        return (
        <div style={{textAlign: "center"}}>
            <div>
            <img src="https://www.placecage.com/gif/200/300" alt="nic cage gifs" />
            </div>
            Look at this sweet ternary!
            {/* This is a great way to render a 'loading' page! */}
            {classDetails.name ?
            <>
            {/* Gotta have the random cat pics... */}
            {/* <img src="http://theoldreader.com/kittens/320/240/" alt=""/> */}
            <h2>{classDetails.name}</h2>
            <div>Hit die: d{classDetails.hit_die}</div>
            <h3>Proficiencies:</h3>
            {classDetails.proficiencies.map((proficiency) => (
                <div key={proficiency.index}>{proficiency.name}</div>
            ))}
            </>
            :
            <>
            <p>Loading class details...</p>
            </>
            }
        </div>
        );
    }
}

export default ClassDetails;