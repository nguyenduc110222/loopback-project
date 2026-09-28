import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {RestExplorerBindings, RestExplorerComponent} from '@loopback/rest-explorer';
import {RepositoryMixin} from '@loopback/repository';
import {RestApplication} from '@loopback/rest';
import {ServiceMixin} from '@loopback/service-proxy';
import path from 'path';

export {ApplicationConfig};

export class LoopbackBackendApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(config: ApplicationConfig = {}) {
    super(config);

    // Set up the custom sequence if needed
    // this.sequence(MySequence);

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
      repositories: {
        // Customize RepositoryBooter conventions here
        dirs: ['repositories'],
        extensions: ['.repository.js'],
        nested: true,
      },
      models: {
        // Customize ModelBooter conventions here
        dirs: ['models'],
        extensions: ['.model.js'],
        nested: true,
      },
      datasources: {
        // Customize DataSourceBooter conventions here
        dirs: ['datasources'],
        extensions: ['.datasource.js'],
        nested: true,
      },
      services: {
        // Customize ServiceBooter conventions here
        dirs: ['services'],
        extensions: ['.service.js'],
        nested: true,
      },
    };
  }
}
