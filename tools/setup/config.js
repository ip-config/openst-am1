/**
 *
 * Configurations for setup
 *
 */

const os = require('os');

const setupConfig = {
  // Platform environment variables filename
  env_vars_file: process.env.OST_SETUP_ENV_FILE || 'openst_env_vars.sh', //Editable
  openst_platform_config_file: process.env.OST_PLATFROM_CONFIG_JSON || 'openst_platform_config.json', //Editable
  allocated_addresses_file_path: 'allocated_addresses.json',
  setup_path: process.env.OST_SETUP_PATH || os.homedir(),

  /**
   * Chain configurations
   */
  chains: {
    // Value Chain
    value: {
      folder_name: 'openst-geth-value', //Editable
      alloc_balance_to_addr: 'foundation',
      chain_id: {
        env_var: 'OST_VALUE_CHAIN_ID',
        value: 2001 //Editable
      },
      network_id: {
        env_var: '',
        value: 2001 //Editable
      },
      port: {
        env_var: '',
        value: 30301 //Editable
      },
      gas_price: {
        env_var: 'OST_VALUE_GAS_PRICE',
        value: '0xBA43B7400' //Editable
      },
      ws_provider: {
        env_var: 'OST_VALUE_GETH_WS_PROVIDER',
        value: 'ws://127.0.0.1:18545' //Editable
      },
      rpc_provider: {
        env_var: 'OST_VALUE_GETH_RPC_PROVIDER',
        value: 'http://127.0.0.1:8545' //Editable
      }
    },

    // Utility Chain
    utility: {
      folder_name: 'openst-geth-utility', //Editable
      alloc_balance_to_addr: 'utilityInitialSTPrimeHolder',
      chain_id: {
        env_var: 'OST_UTILITY_CHAIN_ID',
        value: 1000 //Editable
      },
      network_id: {
        env_var: '',
        value: 1000 //Editable
      },
      port: {
        env_var: '',
        value: 30310 //Editable
      },
      gas_price: {
        env_var: 'OST_UTILITY_GAS_PRICE',
        value: '0x3B9ACA00' //Editable
      },
      ws_provider: {
        env_var: 'OST_UTILITY_GETH_WS_PROVIDER',
        value: 'ws://127.0.0.1:19547' //Editable
      },
      rpc_provider: {
        env_var: 'OST_UTILITY_GETH_RPC_PROVIDER',
        value: 'http://127.0.0.1:9547' //Editable
      }
    }
  },

  /**
   * Cache configurations
   */
  cache: {
    // engine properties
    engine: {
      env_var: 'OST_CACHING_ENGINE',
      value: 'none' //Editable ('none', 'redis', 'memcached')
    },
    default_ttl: {
      env_var: 'OST_DEFAULT_TTL',
      value: 3600 //Editable (in seconds)
    },
    // memcache
    memcache_host: {
      env_var: 'OST_MEMCACHE_SERVERS',
      value: '' //Editable
    },
    // redis
    redis_host: {
      env_var: 'OST_REDIS_HOST',
      value: '' //Editable
    },
    redis_port: {
      env_var: 'OST_REDIS_PORT',
      value: '' //Editable
    },
    redis_pass: {
      env_var: 'OST_REDIS_PASS',
      value: '' //Editable
    },
    redis_tls: {
      env_var: 'OST_REDIS_TLS_ENABLED',
      value: '0' //Editable (0/1)
    }
  },

  /**
   * Notification configurations
   */
  notification: {
    rmq_support: {
      env_var: 'OST_RMQ_SUPPORT',
      value: '1' //Editable (0/1)
    },
    rmq_host: {
      env_var: 'OST_RMQ_HOST',
      value: '127.0.0.1' //Editable
    },
    rmq_port: {
      env_var: 'OST_RMQ_PORT',
      value: '5672' //Editable
    },
    rmq_username: {
      env_var: 'OST_RMQ_USERNAME',
      value: 'guest' //Editable
    },
    rmq_password: {
      env_var: 'OST_RMQ_PASSWORD',
      value: 'guest' //Editable
    },
    rmq_heartbeats: {
      env_var: 'OST_RMQ_HEARTBEATS',
      value: '30' //Editable
    }
  },

  /**
   * Miscellaneous configurations
   */
  misc_deployment: {
    deploy_mock_contract: {
      env_var: 'USE_MOCK_SIMPLE_TOKEN',
      value: '0' //Editable (0/1)
    },
    st_prime_uuid: {
      env_var: 'OST_OPENSTUTILITY_ST_PRIME_UUID',
      value: ''
    },
    standalone_mode: {
      env_var: 'OST_STANDALONE_MODE',
      value: 1
    },
    autoscale_dynamo: {
      env_var: 'AUTO_SCALE_DYNAMO',
      value: 0
    }
  },

  /**
   * Miscellaneous configurations
   */
  dynamodb: {
    api_version: {
      env_var: 'OS_DYNAMODB_API_VERSION',
      value: '2012-08-10'
    },
    access_key_id: {
      env_var: 'OS_DYNAMODB_ACCESS_KEY_ID',
      value: 'x'
    },
    secret_access_key: {
      env_var: 'OS_DYNAMODB_SECRET_ACCESS_KEY',
      value: 'x'
    },
    region: {
      env_var: 'OS_DYNAMODB_REGION',
      value: 'localhost'
    },
    endpoint: {
      env_var: 'OS_DYNAMODB_ENDPOINT',
      value: 'http://localhost:8000'
    },
    db_prefix: {
      env_var: 'OS_DYNAMODB_TABLE_NAME_PREFIX',
      value: ''
    },
    ssl_enabled: {
      env_var: 'OS_DYNAMODB_SSL_ENABLED',
      value: '0'
    },
    logging_enabled: {
      env_var: 'OS_DYNAMODB_LOGGING_ENABLED',
      value: '0'
    },
    transaction_log_shard_name: {
      env_var: 'TRANSACTION_LOG_SHARD_NAME',
      value: '0'
    },
    token_balance_shard_name: {
      env_var: 'TOKEN_BALANCE_SHARD_NAME',
      value: 'tokenBalancesShard_1000'
    }
  },

  autoscaling: {
    api_version: {
      env_var: 'OS_AUTOSCALING_API_VERSION',
      value: '2016-02-06'
    },
    access_key_id: {
      env_var: 'OS_AUTOSCALING_ACCESS_KEY_ID',
      value: 'x'
    },
    secret_access_key: {
      env_var: 'OS_AUTOSCALING_SECRET_ACCESS_KEY',
      value: 'x'
    },
    region: {
      env_var: 'OS_AUTOSCALING_REGION',
      value: 'localhost'
    },
    endpoint: {
      env_var: 'OS_AUTOSCALING_ENDPOINT',
      value: 'http://localhost:8000'
    },
    ssl_enabled: {
      env_var: 'OS_AUTOSCALING_SSL_ENABLED',
      value: '0'
    },
    logging_enabled: {
      env_var: 'OS_AUTOSCALING_LOGGING_ENABLED',
      value: '0'
    }
  },

  /**
   * Address configurations
   */
  addresses: {
    // foundation
    foundation: {
      address: {
        env_var: 'OST_FOUNDATION_ADDR',
        value: ''
      },
      passphrase: {
        env_var: 'OST_FOUNDATION_PASSPHRASE',
        value: 'testtest' //Editable
      },
      chains: {
        value: {
          fund: ''
        }
      }
    },

    // Value registrar address
    valueRegistrar: {
      owner: {
        env_var: '',
        value: 'foundation'
      },
      address: {
        env_var: 'OST_VALUE_REGISTRAR_ADDR',
        value: ''
      },
      passphrase: {
        env_var: 'OST_VALUE_REGISTRAR_PASSPHRASE',
        value: 'testtest' //Editable
      },
      chains: {
        value: {
          fund: ''
        }
      }
    },

    // Utility registrar address
    utilityRegistrar: {
      address: {
        env_var: 'OST_UTILITY_REGISTRAR_ADDR',
        value: ''
      },
      passphrase: {
        env_var: 'OST_UTILITY_REGISTRAR_PASSPHRASE',
        value: 'testtest' //Editable
      },
      chains: {
        utility: {
          fund: ''
        }
      }
    },

    // Sealer address
    sealer: {
      address: {
        env_var: 'OST_SEALER_ADDR',
        value: ''
      },
      passphrase: {
        env_var: '',
        value: 'testtest' //Editable
      },
      chains: {
        utility: {
          fund: ''
        },
        value: {
          fund: ''
        }
      }
    },

    // Value admin address
    valueAdmin: {
      address: {
        env_var: 'OST_VALUE_ADMIN_ADDR',
        value: ''
      },
      passphrase: {
        env_var: 'OST_VALUE_ADMIN_PASSPHRASE',
        value: 'testtest' //Editable
      },
      chains: {
        value: {
          fund: ''
        }
      }
    },

    // Utility admin address
    utilityAdmin: {
      address: {
        env_var: 'OST_UTILITY_ADMIN_ADDR',
        value: ''
      },
      passphrase: {
        env_var: 'OST_UTILITY_ADMIN_PASSPHRASE',
        value: 'testtest' //Editable
      },
      chains: {
        value: {
          fund: ''
        }
      }
    },

    // utility chain owner
    utilityChainOwner: {
      address: {
        env_var: 'OST_UTILITY_CHAIN_OWNER_ADDR',
        value: ''
      },
      passphrase: {
        env_var: 'OST_UTILITY_CHAIN_OWNER_PASSPHRASE',
        value: 'testtest' //Editable
      },
      chains: {
        utility: {
          fund: ''
        },
        value: {
          fund: ''
        }
      }
    },

    // initial ST Prime holder
    utilityInitialSTPrimeHolder: {
      address: {
        env_var: 'OST_UTILITY_INITIAL_ST_PRIME_HOLDER_ADDR',
        value: ''
      },
      passphrase: {
        env_var: 'OST_UTILITY_INITIAL_ST_PRIME_HOLDER_PASSPHRASE',
        value: 'testtest' //Editable
      },
      chains: {
        utility: {
          fund: ''
        }
      }
    },

    // Staker address
    staker: {
      address: {
        env_var: 'OST_STAKER_ADDR',
        value: ''
      },
      passphrase: {
        env_var: 'OST_STAKER_PASSPHRASE',
        value: 'testtest' //Editable
      },
      chains: {
        utility: {
          fund: ''
        },
        value: {
          fund: ''
        }
      }
    },

    // Redeemer address
    redeemer: {
      address: {
        env_var: 'OST_REDEEMER_ADDR',
        value: ''
      },
      passphrase: {
        env_var: 'OST_REDEEMER_PASSPHRASE',
        value: 'testtest' //Editable
      },
      chains: {
        utility: {
          fund: ''
        },
        value: {
          fund: ''
        }
      }
    },

    // Value Deployer Address
    valueDeployer: {
      address: {
        env_var: 'OST_VALUE_DEPLOYER_ADDR',
        value: ''
      },
      passphrase: {
        env_var: 'OST_VALUE_DEPLOYER_PASSPHRASE',
        value: 'testtest' //Editable
      },
      chains: {
        value: {
          fund: ''
        }
      }
    },

    // Utility Deployer Address
    utilityDeployer: {
      address: {
        env_var: 'OST_UTILITY_DEPLOYER_ADDR',
        value: ''
      },
      passphrase: {
        env_var: 'OST_UTILITY_DEPLOYER_PASSPHRASE',
        value: 'testtest' //Editable
      },
      chains: {
        utility: {
          fund: ''
        }
      }
    },

    // Value Ops Address
    valueOps: {
      address: {
        env_var: 'OST_VALUE_OPS_ADDR',
        value: ''
      },
      passphrase: {
        env_var: 'OST_VALUE_OPS_PASSPHRASE',
        value: 'testtest' //Editable
      },
      chains: {
        value: {
          fund: ''
        }
      }
    },

    // Utility Ops Address
    utilityOps: {
      address: {
        env_var: 'OST_UTILITY_OPS_ADDR',
        value: ''
      },
      passphrase: {
        env_var: 'OST_UTILITY_OPS_PASSPHRASE',
        value: 'testtest' //Editable
      },
      chains: {
        utility: {
          fund: ''
        }
      }
    }
  },

  /**
   * Contract addresses configurations
   */
  contracts: {
    // Simple Token EIP20
    simpleToken: {
      address: {
        env_var: 'OST_SIMPLE_TOKEN_CONTRACT_ADDR',
        value: ''
      }
    },

    // openST Utility
    openSTUtility: {
      address: {
        env_var: 'OST_OPENSTUTILITY_CONTRACT_ADDR',
        value: ''
      }
    },

    // openST Value
    openSTValue: {
      address: {
        env_var: 'OST_OPENSTVALUE_CONTRACT_ADDR',
        value: ''
      }
    },

    // ST' EIP20
    stPrime: {
      address: {
        env_var: 'OST_STPRIME_CONTRACT_ADDR',
        value: ''
      }
    },

    // Value Registrar
    valueRegistrar: {
      address: {
        env_var: 'OST_VALUE_REGISTRAR_CONTRACT_ADDR',
        value: ''
      }
    },

    // Utility Registrar
    utilityRegistrar: {
      address: {
        env_var: 'OST_UTILITY_REGISTRAR_CONTRACT_ADDR',
        value: ''
      }
    },

    // Value Core
    valueCore: {
      address: {
        env_var: 'OST_VALUE_CORE_CONTRACT_ADDR',
        value: ''
      }
    }
  }
};

module.exports = setupConfig;
