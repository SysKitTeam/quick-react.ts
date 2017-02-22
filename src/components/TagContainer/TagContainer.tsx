import * as React from 'react';
import {ITagContainerProps} from './TagContainer.Props';
import { Icon } from '../Icon/Icon';
import './TagContainer.scss';

 export class TagContainer extends React.Component<ITagContainerProps, any> {
    constructor(props?: ITagContainerProps) {
        super(props);
    }

    render() {
        let {tags, title} = this.props;
        let extraTags = '';
        if (tags.length > 3) {
            extraTags = tags.map((i) => {return i; } ).splice(3, tags.length).reduce((previous, current) => {
                if (previous !== '') {
                     return previous + '\n' + current.display;
                }
                return current.display;
            }, '');
            console.log(tags.length, tags)
        }
        
        return (
            
            <div className="tag-container"> 
                { title &&              
                    <h5>{title}</h5>
                }
                {
                    tags.length <= 3 &&
                    tags.map((tag, tagIndex) => (
                         <div key={tag.display} className="tag">
                             { tag.iconName &&
                                <Icon iconName={tag.iconName}></Icon>
                             }
                             {
                                 tag.display.length < 7 &&
                                 <span>
                                      {tag.display}
                                </span>
                            }
                             {
                                 tag.display.length > 7 &&
                                 <span style={{cursor: 'pointer'}} title={tag.display}>
                                      {tag.display.substring(0,5)}..
                                </span>
                            }
                         </div> 
                    ))
                }
                {
                    tags.length > 3 &&
                    tags.map((i) => {return i; } ).slice(0,3).map((tag, tagIndex) => (
                         <div key={tag.display} className="tag">
                             { tag.iconName &&
                                <Icon iconName={tag.iconName}></Icon>
                             }
                             {
                                 tag.display.length < 7 &&
                                 <span>
                                      {tag.display}
                                </span>
                            }
                             {
                                 tag.display.length > 7 &&
                                 <span style={{cursor: 'pointer'}} title={tag.display}>
                                      {tag.display.substring(0,5)}..
                                </span>
                            }
                         </div>
                    )) 
                }
                {
                    tags.length > 3 &&
                    <div className="tag points" title={extraTags}>...</div>
                }
                {this.props.children}
            </div>
        );
    }
 }
