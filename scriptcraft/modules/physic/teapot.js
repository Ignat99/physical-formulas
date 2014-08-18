// http://www.elremont.ru/small_rbt/chainik1.php
// http://www.e-reading.ws/chapter.php/83924/80/Korshever_-_Elektrika_v_dome.html
var teapot = {
  input: {
    electric network: 'V1',
    aqua: 'V2',
    environment: 'V3',
    table: 'V4'
  },
  output: {
    time_work : 'T',
    electric_power: 'N_l',
    minimum_temperature: 'alpha',
    maximum_temperature: 'alpha'
  },
  inout: {
    plug : {
      name : 'E0',
      connection : {
        type : 'attach',
        wire : 'E1',
        process : 'GA + GB -> GAB',
        physical_laws : 'E1(phi)->E0(phi)'
      }
    },
    wire : {
      name : 'E1',
      connection : {
        type : 'attach',
        electric network: 'V1',
        process : 'GA o-o GA',
        physical_laws : 'V1(phi)o-oE1(phi):V1(I)o-oE1(I)'
      }
    spiral : {
      name : 'E2',
      connection : {
        type : 'attach',
        plug: 'E0',
        process : 'GA -> GB:GB -> GA',
        physical_laws : 'U/R->I:I*R->U'
      }
    }
    capacity : {
      name : 'E3',
      connection : {
        type : 'inside',
        aqua: 'V2',
        process : 'GA -> GB',
        physical_laws : 'I*I*T*R -> Q'
      },
      connection : {
        type : 'inside',
        spiral : 'E2',
        process : 'GA +',
        physical_laws : 'S_l = alpha * l_1'
      }
    }
    hull : {
      name : 'E4',
      connection : {
        type : 'around',
        environment: 'V3',
        process : 'GA1 > GA2',
        physical_laws : 'S_l = alpha * l_1'
      },
      connection : {
        type : 'attach',
        table: 'V4',
        process : 'GA -> GB',
        physical_laws : 'E4(F)->V4(-F)'
      },
      connection : {
        type : 'inside',
        refractory : 'E5',
        capacity : 'E3',
        process : 'GA -> GB',
        physical_laws : 'E3(F)->E4(-F):E5(F)->E4(-F)'
      }
    },
    refractory : {
      name : 'E5',
      connection : {
        type : 'attach',
        spiral : 'E2'
      }
    }
  }
};

var capacity = {
  inout : {
    hole : 'A'
  },
  geometrical_parameters : {
    shape : 'sphere'
    block : 41, //gold
    func : "\n// a sphere:\nvar sphere = CSG.sphere({\n  center: [0, 0, 0],\n  radius: 2,            // must be scalar\n  resolution: 32        // optional\n});"
  }
};

var hull = {
  inout : {
    hole : 'A'
  },
  geometrical_parameters : {
    shape : 'sphere',
    block : 42 //iron
  }
};  
var plug = {
  inout : {
    cable_grip : 'E4',
    earth_terminal: 'E0',
    line_terminal: 'E1',
    neutral_terminal: 'E2',
    hull : 'E3'
  }
};

var wire = {
  input : {
    pins : 'A:B:C'
  },
  output : {
    pins : 'A:B:C'
  },
  inout : {
    pins : 'A:B:C'
  }
};

var spiral = {
  input : {
    pins : 'A:B'
  },
  inout : {
    earth_terminal: 'E0',
    line_terminal: 'E1',
    neutral_terminal: 'E2',
    hull : 'E3',
    spiral_wire : {
      name: 'E4',
      connection : {
        type : 'attach',
        earth_terminal : 'E3',
        line_terminal : 'A',
        neutral_terminal : 'B'
      }
    }      
  },

};

var spiral_wire = {
  inout : {
    pins : 'A:B'
  },
  geometrical_parameters : {
    shape : 'spiral'
    block : 132, //tripwire
  }
};

var refractoty = {
  input : {
    pins : 'A:B:C'
  },
  output : {
    pins : 'A:B:C'
  },
  inout : {
    pins : 'A:B:C'
  },
  geometrical_parameters : {
    shape : 'box0'
    block : 172, //hardened clay
    width : 1, 
    height : 1, 
    depth : 1
  }
};
