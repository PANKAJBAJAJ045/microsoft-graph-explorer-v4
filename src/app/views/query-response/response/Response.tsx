
import React from 'react';
import { useDispatch } from 'react-redux';

import { getContentType } from '../../../services/actions/query-action-creator-util';
import { responseMessages } from './ResponseMessages';
import { convertVhToPx, getResponseHeight } from '../../common/dimensions/dimensions-adjustment';
import ResponseDisplay from './ResponseDisplay';
import { AppDispatch, useAppSelector } from '../../../../store';

const Response = () => {
  const { dimensions: { response }, graphResponse, responseAreaExpanded, sampleQuery, authToken, graphExplorerMode } =
    useAppSelector((state) => state);
  const { body, headers } = graphResponse;
  const dispatch: AppDispatch = useDispatch();

  const height = convertVhToPx(getResponseHeight(response.height, responseAreaExpanded), 100);

  const contentDownloadUrl = body?.contentDownloadUrl;
  const throwsCorsError = body?.throwsCorsError;
  const contentType = getContentType(headers);
  return (
    <div style={{ display: 'block' }}>
      {responseMessages(graphResponse, sampleQuery, authToken, graphExplorerMode, dispatch)}
      {!contentDownloadUrl && !throwsCorsError && headers &&
        <ResponseDisplay
          contentType={contentType}
          body={body}
          height={height}
        />}
    </div>
  );

};

export default Response;