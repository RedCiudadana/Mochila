import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';
import { scheduleOnce } from '@ember/runloop';

const Router = EmberRouter.extend({
  location: config.locationType,
  // Servicio para Google Analytics (ember-metrics)
  metrics: service(),

  // Llamar a '_trackPage' en cada transición
  didTransition() {
    this._super(...arguments);
    this._trackPage();
  },

  // Registra la página visitada con el servicio 'metrics'
  _trackPage() {
    scheduleOnce('afterRender', this, () => {
      const page = this.url;
      const title = this.getWithDefault('currentRouteName', 'unknown');
      this.metrics.trackPage({ page, title });
    });
  }
});

Router.map(function() {
});

export default Router;
