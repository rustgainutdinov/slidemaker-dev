import React from 'react';
import { useSelector } from 'react-redux';
import { isShape } from '../../../methods/typeGuardMethods/isShape';
import Editor from '../../../model/Editor';
import Content from '../../../model/slide/content/Content';
import { RootState } from '../../../store/Reducer';
import './shapeTools.css'
import { ShapeBg } from './updateShapeBg';
import { ShapeBorder } from './updateShapeBorder';

export const ShapeTools: React.FC = () => {
    const presentEditor: Editor = useSelector(
        (state: RootState) => state.editorReducer.present
    );

    const getUpdateContentControlElements = (presentEditor: Editor) => {
        if (!presentEditor.currentContent) return;
        let content: Content = presentEditor.currentContent;
        if (isShape(content)) {
            return (
                <>
                    <ShapeBg presentEditor={presentEditor} currentContent={content} />
                    <ShapeBorder presentEditor={presentEditor} currentContent={content} />
                </>
            )
        }
    }

    return (
        <div className="shape_tools_panel">
            {getUpdateContentControlElements(presentEditor)}
        </div>
    )
}