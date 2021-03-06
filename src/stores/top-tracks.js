'use strict';

import Reflux from 'reflux';
import Actions from '../actions';
import { getTopTracks } from '../api/user';

export default Reflux.createStore({
  listenables: [Actions],

  getTopTracks(params) {
    getTopTracks(params, res => {
      this.topTracks = res.toptracks.track;
      this.metadata = res.toptracks['@attr'];
      this.triggerChange();
    });
  },

  triggerChange() {
    this.trigger('change', this.topTracks, this.metadata);
  }
});
