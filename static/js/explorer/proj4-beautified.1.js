! function (t, s) {
  "function" == typeof define && define.amd ? define(s) : "undefined" != typeof module ? module.exports = s() : t.proj4 = s()
}(this, function () {
  var t, s, i;
  return function (a) {
    function h(t, s) {
      return x.call(t, s)
    }

    function e(t, s) {
      var i, a, h, e, n, r, o, l, u, p, c = s && s.split("/"),
        m = y.map,
        M = m && m["*"] || {};
      if (t && "." === t.charAt(0))
        if (s) {
          for (c = c.slice(0, c.length - 1), t = c.concat(t.split("/")), l = 0; l < t.length; l += 1)
            if (p = t[l], "." === p) t.splice(l, 1), l -= 1;
            else if (".." === p) {
            if (1 === l && (".." === t[2] || ".." === t[0])) break;
            l > 0 && (t.splice(l - 1, 2), l -= 2)
          }
          t = t.join("/")
        } else 0 === t.indexOf("./") && (t = t.substring(2));
      if ((c || M) && m) {
        for (i = t.split("/"), l = i.length; l > 0; l -= 1) {
          if (a = i.slice(0, l).join("/"), c)
            for (u = c.length; u > 0; u -= 1)
              if (h = m[c.slice(0, u).join("/")], h && (h = h[a])) {
                e = h, n = l;
                break
              }
          if (e) break;
          !r && M && M[a] && (r = M[a], o = l)
        }!e && r && (e = r, n = o), e && (i.splice(0, n, e), t = i.join("/"))
      }
      return t
    }

    function n(t, s) {
      return function () {
        return m.apply(a, g.call(arguments, 0).concat([t, s]))
      }
    }

    function r(t) {
      return function (s) {
        return e(s, t)
      }
    }

    function o(t) {
      return function (s) {
        d[t] = s
      }
    }

    function l(t) {
      if (h(_, t)) {
        var s = _[t];
        delete _[t], j[t] = !0, c.apply(a, s)
      }
      if (!h(d, t) && !h(j, t)) throw new Error("No " + t);
      return d[t]
    }

    function u(t) {
      var s, i = t ? t.indexOf("!") : -1;
      return i > -1 && (s = t.substring(0, i), t = t.substring(i + 1, t.length)), [s, t]
    }

    function p(t) {
      return function () {
        return y && y.config && y.config[t] || {}
      }
    }
    var c, m, M, f, d = {}, _ = {}, y = {}, j = {}, x = Object.prototype.hasOwnProperty,
      g = [].slice;
    M = function (t, s) {
      var i, a = u(t),
        h = a[0];
      return t = a[1], h && (h = e(h, s), i = l(h)), h ? t = i && i.normalize ? i.normalize(t, r(s)) : e(t, s) : (t = e(t, s), a = u(t), h = a[0], t = a[1], h && (i = l(h))), {
        f: h ? h + "!" + t : t,
        n: t,
        pr: h,
        p: i
      }
    }, f = {
      require: function (t) {
        return n(t)
      },
      exports: function (t) {
        var s = d[t];
        return "undefined" != typeof s ? s : d[t] = {}
      },
      module: function (t) {
        return {
          id: t,
          uri: "",
          exports: d[t],
          config: p(t)
        }
      }
    }, c = function (t, s, i, e) {
      var r, u, p, c, m, y, x = [];
      if (e = e || t, "function" == typeof i) {
        for (s = !s.length && i.length ? ["require", "exports", "module"] : s, m = 0; m < s.length; m += 1)
          if (c = M(s[m], e), u = c.f, "require" === u) x[m] = f.require(t);
          else if ("exports" === u) x[m] = f.exports(t), y = !0;
        else if ("module" === u) r = x[m] = f.module(t);
        else if (h(d, u) || h(_, u) || h(j, u)) x[m] = l(u);
        else {
          if (!c.p) throw new Error(t + " missing " + u);
          c.p.load(c.n, n(e, !0), o(u), {}), x[m] = d[u]
        }
        p = i.apply(d[t], x), t && (r && r.exports !== a && r.exports !== d[t] ? d[t] = r.exports : p === a && y || (d[t] = p))
      } else t && (d[t] = i)
    }, t = s = m = function (t, s, i, h, e) {
      return "string" == typeof t ? f[t] ? f[t](s) : l(M(t, s).f) : (t.splice || (y = t, s.splice ? (t = s, s = i, i = null) : t = a), s = s || function () {}, "function" == typeof i && (i = h, h = e), h ? c(a, t, s, i) : setTimeout(function () {
        c(a, t, s, i)
      }, 4), m)
    }, m.config = function (t) {
      return y = t, y.deps && m(y.deps, y.callback), m
    }, t._defined = d, i = function (t, s, i) {
      s.splice || (i = s, s = []), h(d, t) || h(_, t) || (_[t] = [t, s, i])
    }, i.amd = {
      jQuery: !0
    }
  }(), i("node_modules/almond/almond", function () {}), i("proj4/mgrs", ["require", "exports", "module"], function (t, s) {
    function i(t) {
      return t * (Math.PI / 180)
    }

    function a(t) {
      return 180 * (t / Math.PI)
    }

    function h(t) {
      var s, a, h, e, r, o, l, u, p, c = t.lat,
        m = t.lon,
        M = 6378137,
        f = .00669438,
        d = .9996,
        _ = i(c),
        y = i(m);
      p = Math.floor((m + 180) / 6) + 1, 180 === m && (p = 60), c >= 56 && 64 > c && m >= 3 && 12 > m && (p = 32), c >= 72 && 84 > c && (m >= 0 && 9 > m ? p = 31 : m >= 9 && 21 > m ? p = 33 : m >= 21 && 33 > m ? p = 35 : m >= 33 && 42 > m && (p = 37)), s = 6 * (p - 1) - 180 + 3, u = i(s), a = f / (1 - f), h = M / Math.sqrt(1 - f * Math.sin(_) * Math.sin(_)), e = Math.tan(_) * Math.tan(_), r = a * Math.cos(_) * Math.cos(_), o = Math.cos(_) * (y - u), l = M * ((1 - f / 4 - 3 * f * f / 64 - 5 * f * f * f / 256) * _ - (3 * f / 8 + 3 * f * f / 32 + 45 * f * f * f / 1024) * Math.sin(2 * _) + (15 * f * f / 256 + 45 * f * f * f / 1024) * Math.sin(4 * _) - 35 * f * f * f / 3072 * Math.sin(6 * _));
      var j = d * h * (o + (1 - e + r) * o * o * o / 6 + (5 - 18 * e + e * e + 72 * r - 58 * a) * o * o * o * o * o / 120) + 5e5,
        x = d * (l + h * Math.tan(_) * (o * o / 2 + (5 - e + 9 * r + 4 * r * r) * o * o * o * o / 24 + (61 - 58 * e + e * e + 600 * r - 330 * a) * o * o * o * o * o * o / 720));
      return 0 > c && (x += 1e7), {
        northing: Math.round(x),
        easting: Math.round(j),
        zoneNumber: p,
        zoneLetter: n(c)
      }
    }

    function e(t) {
      var s = t.northing,
        i = t.easting,
        h = t.zoneLetter,
        n = t.zoneNumber;
      if (0 > n || n > 60) return null;
      var r, o, l, u, p, c, m, M, f, d, _ = .9996,
        y = 6378137,
        j = .00669438,
        x = (1 - Math.sqrt(1 - j)) / (1 + Math.sqrt(1 - j)),
        g = i - 5e5,
        v = s;
      "N" > h && (v -= 1e7), M = 6 * (n - 1) - 180 + 3, r = j / (1 - j), m = v / _, f = m / (y * (1 - j / 4 - 3 * j * j / 64 - 5 * j * j * j / 256)), d = f + (3 * x / 2 - 27 * x * x * x / 32) * Math.sin(2 * f) + (21 * x * x / 16 - 55 * x * x * x * x / 32) * Math.sin(4 * f) + 151 * x * x * x / 96 * Math.sin(6 * f), o = y / Math.sqrt(1 - j * Math.sin(d) * Math.sin(d)), l = Math.tan(d) * Math.tan(d), u = r * Math.cos(d) * Math.cos(d), p = y * (1 - j) / Math.pow(1 - j * Math.sin(d) * Math.sin(d), 1.5), c = g / (o * _);
      var P = d - o * Math.tan(d) / p * (c * c / 2 - (5 + 3 * l + 10 * u - 4 * u * u - 9 * r) * c * c * c * c / 24 + (61 + 90 * l + 298 * u + 45 * l * l - 252 * r - 3 * u * u) * c * c * c * c * c * c / 720);
      P = a(P);
      var b = (c - (1 + 2 * l + u) * c * c * c / 6 + (5 - 2 * u + 28 * l - 3 * u * u + 8 * r + 24 * l * l) * c * c * c * c * c / 120) / Math.cos(d);
      b = M + a(b);
      var C;
      if (t.accuracy) {
        var S = e({
          northing: t.northing + t.accuracy,
          easting: t.easting + t.accuracy,
          zoneLetter: t.zoneLetter,
          zoneNumber: t.zoneNumber
        });
        C = {
          top: S.lat,
          right: S.lon,
          bottom: P,
          left: b
        }
      } else C = {
        lat: P,
        lon: b
      };
      return C
    }

    function n(t) {
      var s = "Z";
      return 84 >= t && t >= 72 ? s = "X" : 72 > t && t >= 64 ? s = "W" : 64 > t && t >= 56 ? s = "V" : 56 > t && t >= 48 ? s = "U" : 48 > t && t >= 40 ? s = "T" : 40 > t && t >= 32 ? s = "S" : 32 > t && t >= 24 ? s = "R" : 24 > t && t >= 16 ? s = "Q" : 16 > t && t >= 8 ? s = "P" : 8 > t && t >= 0 ? s = "N" : 0 > t && t >= -8 ? s = "M" : -8 > t && t >= -16 ? s = "L" : -16 > t && t >= -24 ? s = "K" : -24 > t && t >= -32 ? s = "J" : -32 > t && t >= -40 ? s = "H" : -40 > t && t >= -48 ? s = "G" : -48 > t && t >= -56 ? s = "F" : -56 > t && t >= -64 ? s = "E" : -64 > t && t >= -72 ? s = "D" : -72 > t && t >= -80 && (s = "C"), s
    }

    function r(t, s) {
      var i = "" + t.easting,
        a = "" + t.northing;
      return t.zoneNumber + t.zoneLetter + o(t.easting, t.northing, t.zoneNumber) + i.substr(i.length - 5, s) + a.substr(a.length - 5, s)
    }

    function o(t, s, i) {
      var a = l(i),
        h = Math.floor(t / 1e5),
        e = Math.floor(s / 1e5) % 20;
      return u(h, e, a)
    }

    function l(t) {
      var s = t % f;
      return 0 === s && (s = f), s
    }

    function u(t, s, i) {
      var a = i - 1,
        h = d.charCodeAt(a),
        e = _.charCodeAt(a),
        n = h + t - 1,
        r = e + s,
        o = !1;
      n > v && (n = n - v + y - 1, o = !0), (n === j || j > h && n > j || (n > j || j > h) && o) && n++, (n === x || x > h && n > x || (n > x || x > h) && o) && (n++, n === j && n++), n > v && (n = n - v + y - 1), r > g ? (r = r - g + y - 1, o = !0) : o = !1, (r === j || j > e && r > j || (r > j || j > e) && o) && r++, (r === x || x > e && r > x || (r > x || x > e) && o) && (r++, r === j && r++), r > g && (r = r - g + y - 1);
      var l = String.fromCharCode(n) + String.fromCharCode(r);
      return l
    }

    function p(t) {
      if (t && 0 === t.length) throw "MGRSPoint coverting from nothing";
      for (var s, i = t.length, a = null, h = "", e = 0; !/[A-Z]/.test(s = t.charAt(e));) {
        if (e >= 2) throw "MGRSPoint bad conversion from: " + t;
        h += s, e++
      }
      var n = parseInt(h, 10);
      if (0 === e || e + 3 > i) throw "MGRSPoint bad conversion from: " + t;
      var r = t.charAt(e++);
      if ("A" >= r || "B" === r || "Y" === r || r >= "Z" || "I" === r || "O" === r) throw "MGRSPoint zone letter " + r + " not handled: " + t;
      a = t.substring(e, e += 2);
      for (var o = l(n), u = c(a.charAt(0), o), p = m(a.charAt(1), o); p < M(r);) p += 2e6;
      var f = i - e;
      if (0 !== f % 2) throw "MGRSPoint has to have an even number \nof digits after the zone letter and two 100km letters - front \nhalf for easting meters, second half for \nnorthing meters" + t;
      var d, _, y, j, x, g = f / 2,
        v = 0,
        P = 0;
      return g > 0 && (d = 1e5 / Math.pow(10, g), _ = t.substring(e, e + g), v = parseFloat(_) * d, y = t.substring(e + g), P = parseFloat(y) * d), j = v + u, x = P + p, {
        easting: j,
        northing: x,
        zoneLetter: r,
        zoneNumber: n,
        accuracy: d
      }
    }

    function c(t, s) {
      for (var i = d.charCodeAt(s - 1), a = 1e5, h = !1; i !== t.charCodeAt(0);) {
        if (i++, i === j && i++, i === x && i++, i > v) {
          if (h) throw "Bad character: " + t;
          i = y, h = !0
        }
        a += 1e5
      }
      return a
    }

    function m(t, s) {
      if (t > "V") throw "MGRSPoint given invalid Northing " + t;
      for (var i = _.charCodeAt(s - 1), a = 0, h = !1; i !== t.charCodeAt(0);) {
        if (i++, i === j && i++, i === x && i++, i > g) {
          if (h) throw "Bad character: " + t;
          i = y, h = !0
        }
        a += 1e5
      }
      return a
    }

    function M(t) {
      var s;
      switch (t) {
      case "C":
        s = 11e5;
        break;
      case "D":
        s = 2e6;
        break;
      case "E":
        s = 28e5;
        break;
      case "F":
        s = 37e5;
        break;
      case "G":
        s = 46e5;
        break;
      case "H":
        s = 55e5;
        break;
      case "J":
        s = 64e5;
        break;
      case "K":
        s = 73e5;
        break;
      case "L":
        s = 82e5;
        break;
      case "M":
        s = 91e5;
        break;
      case "N":
        s = 0;
        break;
      case "P":
        s = 8e5;
        break;
      case "Q":
        s = 17e5;
        break;
      case "R":
        s = 26e5;
        break;
      case "S":
        s = 35e5;
        break;
      case "T":
        s = 44e5;
        break;
      case "U":
        s = 53e5;
        break;
      case "V":
        s = 62e5;
        break;
      case "W":
        s = 7e6;
        break;
      case "X":
        s = 79e5;
        break;
      default:
        s = -1
      }
      if (s >= 0) return s;
      throw "Invalid zone letter: " + t
    }
    var f = 6,
      d = "AJSAJS",
      _ = "AFAFAF",
      y = 65,
      j = 73,
      x = 79,
      g = 86,
      v = 90;
    s.forward = function (t, s) {
      return s = s || 5, r(h({
        lat: t.lat,
        lon: t.lon
      }), s)
    }, s.inverse = function (t) {
      var s = e(p(t.toUpperCase()));
      return [s.left, s.bottom, s.right, s.top]
    }
  }), i("proj4/Point", ["require", "proj4/mgrs"], function (t) {
    function s(t, i, a) {
      if (!(this instanceof s)) return new s(t, i, a);
      if ("object" == typeof t) this.x = t[0], this.y = t[1], this.z = t[2] || 0;
      else if ("string" == typeof t && "undefined" == typeof i) {
        var h = t.split(",");
        this.x = parseFloat(h[0]), this.y = parseFloat(h[1]), this.z = parseFloat(h[2]) || 0
      } else this.x = t, this.y = i, this.z = a || 0;
      this.clone = function () {
        return new s(this.x, this.y, this.z)
      }, this.toString = function () {
        return "x=" + this.x + ",y=" + this.y
      }, this.toShortString = function () {
        return this.x + ", " + this.y
      }
    }
    var i = t("proj4/mgrs");
    return s.fromMGRS = function (t) {
      var a = i.inverse(t);
      return new s((a[2] + a[0]) / 2, (a[3] + a[1]) / 2)
    }, s.prototype.toMGRS = function (t) {
      return i.forward({
        lon: this.x,
        lat: this.y
      }, t)
    }, s
  }), i("proj4/extend", [], function () {
    return function (t, s) {
      t = t || {};
      var i, a;
      if (!s) return t;
      for (a in s) i = s[a], void 0 !== i && (t[a] = i);
      return t
    }
  }), i("proj4/common", [], function () {
    var t = {
      PI: 3.141592653589793,
      HALF_PI: 1.5707963267948966,
      TWO_PI: 6.283185307179586,
      FORTPI: .7853981633974483,
      R2D: 57.29577951308232,
      D2R: .017453292519943295,
      SEC_TO_RAD: 484813681109536e-20,
      EPSLN: 1e-10,
      MAX_ITER: 20,
      COS_67P5: .3826834323650898,
      AD_C: 1.0026,
      PJD_UNKNOWN: 0,
      PJD_3PARAM: 1,
      PJD_7PARAM: 2,
      PJD_GRIDSHIFT: 3,
      PJD_WGS84: 4,
      PJD_NODATUM: 5,
      SRS_WGS84_SEMIMAJOR: 6378137,
      SRS_WGS84_ESQUARED: .006694379990141316,
      SIXTH: .16666666666666666,
      RA4: .04722222222222222,
      RA6: .022156084656084655,
      RV4: .06944444444444445,
      RV6: .04243827160493827,
      msfnz: function (t, s, i) {
        var a = t * s;
        return i / Math.sqrt(1 - a * a)
      },
      tsfnz: function (t, s, i) {
        var a = t * i,
          h = .5 * t;
        return a = Math.pow((1 - a) / (1 + a), h), Math.tan(.5 * (this.HALF_PI - s)) / a
      },
      phi2z: function (t, s) {
        for (var i, a, h = .5 * t, e = this.HALF_PI - 2 * Math.atan(s), n = 0; 15 >= n; n++)
          if (i = t * Math.sin(e), a = this.HALF_PI - 2 * Math.atan(s * Math.pow((1 - i) / (1 + i), h)) - e, e += a, Math.abs(a) <= 1e-10) return e;
        return -9999
      },
      qsfnz: function (t, s) {
        var i;
        return t > 1e-7 ? (i = t * s, (1 - t * t) * (s / (1 - i * i) - .5 / t * Math.log((1 - i) / (1 + i)))) : 2 * s
      },
      iqsfnz: function (s, i) {
        var a = 1 - (1 - s * s) / (2 * s) * Math.log((1 - s) / (1 + s));
        if (Math.abs(Math.abs(i) - a) < 1e-6) return 0 > i ? -1 * t.HALF_PI : t.HALF_PI;
        for (var h, e, n, r, o = Math.asin(.5 * i), l = 0; 30 > l; l++)
          if (e = Math.sin(o), n = Math.cos(o), r = s * e, h = Math.pow(1 - r * r, 2) / (2 * n) * (i / (1 - s * s) - e / (1 - r * r) + .5 / s * Math.log((1 - r) / (1 + r))), o += h, Math.abs(h) <= 1e-10) return o;
        return 0 / 0
      },
      asinz: function (t) {
        return Math.abs(t) > 1 && (t = t > 1 ? 1 : -1), Math.asin(t)
      },
      e0fn: function (t) {
        return 1 - .25 * t * (1 + t / 16 * (3 + 1.25 * t))
      },
      e1fn: function (t) {
        return .375 * t * (1 + .25 * t * (1 + .46875 * t))
      },
      e2fn: function (t) {
        return .05859375 * t * t * (1 + .75 * t)
      },
      e3fn: function (t) {
        return t * t * t * (35 / 3072)
      },
      mlfn: function (t, s, i, a, h) {
        return t * h - s * Math.sin(2 * h) + i * Math.sin(4 * h) - a * Math.sin(6 * h)
      },
      imlfn: function (t, s, i, a, h) {
        var e, n;
        e = t / s;
        for (var r = 0; 15 > r; r++)
          if (n = (t - (s * e - i * Math.sin(2 * e) + a * Math.sin(4 * e) - h * Math.sin(6 * e))) / (s - 2 * i * Math.cos(2 * e) + 4 * a * Math.cos(4 * e) - 6 * h * Math.cos(6 * e)), e += n, Math.abs(n) <= 1e-10) return e;
        return 0 / 0
      },
      srat: function (t, s) {
        return Math.pow((1 - t) / (1 + t), s)
      },
      sign: function (t) {
        return 0 > t ? -1 : 1
      },
      adjust_lon: function (t) {
        return t = Math.abs(t) < this.PI ? t : t - this.sign(t) * this.TWO_PI
      },
      adjust_lat: function (t) {
        return t = Math.abs(t) < this.HALF_PI ? t : t - this.sign(t) * this.PI
      },
      latiso: function (t, s, i) {
        if (Math.abs(s) > this.HALF_PI) return Number.NaN;
        if (s === this.HALF_PI) return Number.POSITIVE_INFINITY;
        if (s === -1 * this.HALF_PI) return Number.NEGATIVE_INFINITY;
        var a = t * i;
        return Math.log(Math.tan((this.HALF_PI + s) / 2)) + t * Math.log((1 - a) / (1 + a)) / 2
      },
      fL: function (t, s) {
        return 2 * Math.atan(t * Math.exp(s)) - this.HALF_PI
      },
      invlatiso: function (t, s) {
        var i = this.fL(1, s),
          a = 0,
          h = 0;
        do a = i, h = t * Math.sin(a), i = this.fL(Math.exp(t * Math.log((1 + h) / (1 - h)) / 2), s); while (Math.abs(i - a) > 1e-12);
        return i
      },
      sinh: function (t) {
        var s = Math.exp(t);
        return s = (s - 1 / s) / 2
      },
      cosh: function (t) {
        var s = Math.exp(t);
        return s = (s + 1 / s) / 2
      },
      tanh: function (t) {
        var s = Math.exp(t);
        return s = (s - 1 / s) / (s + 1 / s)
      },
      asinh: function (t) {
        var s = t >= 0 ? 1 : -1;
        return s * Math.log(Math.abs(t) + Math.sqrt(t * t + 1))
      },
      acosh: function (t) {
        return 2 * Math.log(Math.sqrt((t + 1) / 2) + Math.sqrt((t - 1) / 2))
      },
      atanh: function (t) {
        return Math.log((t - 1) / (t + 1)) / 2
      },
      gN: function (t, s, i) {
        var a = s * i;
        return t / Math.sqrt(1 - a * a)
      },
      pj_enfn: function (t) {
        var s = [];
        s[0] = this.C00 - t * (this.C02 + t * (this.C04 + t * (this.C06 + t * this.C08))), s[1] = t * (this.C22 - t * (this.C04 + t * (this.C06 + t * this.C08)));
        var i = t * t;
        return s[2] = i * (this.C44 - t * (this.C46 + t * this.C48)), i *= t, s[3] = i * (this.C66 - t * this.C68), s[4] = i * t * this.C88, s
      },
      pj_mlfn: function (t, s, i, a) {
        return i *= s, s *= s, a[0] * t - i * (a[1] + s * (a[2] + s * (a[3] + s * a[4])))
      },
      pj_inv_mlfn: function (s, i, a) {
        for (var h = 1 / (1 - i), e = s, n = t.MAX_ITER; n; --n) {
          var r = Math.sin(e),
            o = 1 - i * r * r;
          if (o = (this.pj_mlfn(e, r, Math.cos(e), a) - s) * o * Math.sqrt(o) * h, e -= o, Math.abs(o) < t.EPSLN) return e
        }
        return e
      },
      nad_intr: function (t, s) {
        var i, a = {
            x: (t.x - 1e-7) / s.del[0],
            y: (t.y - 1e-7) / s.del[1]
          }, h = {
            x: Math.floor(a.x),
            y: Math.floor(a.y)
          }, e = {
            x: a.x - 1 * h.x,
            y: a.y - 1 * h.y
          }, n = {
            x: Number.NaN,
            y: Number.NaN
          };
        if (h.x < 0) {
          if (!(-1 === h.x && e.x > .99999999999)) return n;
          h.x++, e.x = 0
        } else if (i = h.x + 1, i >= s.lim[0]) {
          if (!(i === s.lim[0] && e.x < 1e-11)) return n;
          h.x--, e.x = 1
        }
        if (h.y < 0) {
          if (!(-1 === h.y && e.y > .99999999999)) return n;
          h.y++, e.y = 0
        } else if (i = h.y + 1, i >= s.lim[1]) {
          if (!(i === s.lim[1] && e.y < 1e-11)) return n;
          h.y++, e.y = 1
        }
        i = h.y * s.lim[0] + h.x;
        var r = {
          x: s.cvs[i][0],
          y: s.cvs[i][1]
        };
        i++;
        var o = {
          x: s.cvs[i][0],
          y: s.cvs[i][1]
        };
        i += s.lim[0];
        var l = {
          x: s.cvs[i][0],
          y: s.cvs[i][1]
        };
        i--;
        var u = {
          x: s.cvs[i][0],
          y: s.cvs[i][1]
        }, p = e.x * e.y,
          c = e.x * (1 - e.y),
          m = (1 - e.x) * (1 - e.y),
          M = (1 - e.x) * e.y;
        return n.x = m * r.x + c * o.x + M * u.x + p * l.x, n.y = m * r.y + c * o.y + M * u.y + p * l.y, n
      },
      nad_cvt: function (s, i, a) {
        var h = {
          x: Number.NaN,
          y: Number.NaN
        };
        if (isNaN(s.x)) return h;
        var e = {
          x: s.x,
          y: s.y
        };
        e.x -= a.ll[0], e.y -= a.ll[1], e.x = t.adjust_lon(e.x - t.PI) + t.PI;
        var n = t.nad_intr(e, a);
        if (i) {
          if (isNaN(n.x)) return h;
          n.x = e.x + n.x, n.y = e.y - n.y;
          var r, o, l = 9,
            u = 1e-12;
          do {
            if (o = t.nad_intr(n, a), isNaN(o.x)) {
              this.reportError("Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.");
              break
            }
            r = {
              x: n.x - o.x - e.x,
              y: n.y + o.y - e.y
            }, n.x -= r.x, n.y -= r.y
          } while (l-- && Math.abs(r.x) > u && Math.abs(r.y) > u);
          if (0 > l) return this.reportError("Inverse grid shift iterator failed to converge."), h;
          h.x = t.adjust_lon(n.x + a.ll[0]), h.y = n.y + a.ll[1]
        } else isNaN(n.x) || (h.x = s.x - n.x, h.y = s.y + n.y);
        return h
      },
      C00: 1,
      C02: .25,
      C04: .046875,
      C06: .01953125,
      C08: .01068115234375,
      C22: .75,
      C44: .46875,
      C46: .013020833333333334,
      C48: .007120768229166667,
      C66: .3645833333333333,
      C68: .005696614583333333,
      C88: .3076171875
    };
    return t
  }), i("proj4/global", [], function () {
    return function (t) {
      t("WGS84", "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"), t("EPSG:4326", "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"), t("EPSG:4269", "+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"), t("EPSG:3857", "+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs"), t["EPSG:3785"] = t["EPSG:3857"], t.GOOGLE = t["EPSG:3857"], t["EPSG:900913"] = t["EPSG:3857"], t["EPSG:102113"] = t["EPSG:3857"]
    }
  }), i("proj4/constants/PrimeMeridian", {
    greenwich: 0,
    lisbon: -9.131906111111,
    paris: 2.337229166667,
    bogota: -74.080916666667,
    madrid: -3.687938888889,
    rome: 12.452333333333,
    bern: 7.439583333333,
    jakarta: 106.807719444444,
    ferro: -17.666666666667,
    brussels: 4.367975,
    stockholm: 18.058277777778,
    athens: 23.7163375,
    oslo: 10.722916666667
  }), i("proj4/constants/Ellipsoid", {
    MERIT: {
      a: 6378137,
      rf: 298.257,
      ellipseName: "MERIT 1983"
    },
    SGS85: {
      a: 6378136,
      rf: 298.257,
      ellipseName: "Soviet Geodetic System 85"
    },
    GRS80: {
      a: 6378137,
      rf: 298.257222101,
      ellipseName: "GRS 1980(IUGG, 1980)"
    },
    IAU76: {
      a: 6378140,
      rf: 298.257,
      ellipseName: "IAU 1976"
    },
    airy: {
      a: 6377563.396,
      b: 6356256.91,
      ellipseName: "Airy 1830"
    },
    "APL4.": {
      a: 6378137,
      rf: 298.25,
      ellipseName: "Appl. Physics. 1965"
    },
    NWL9D: {
      a: 6378145,
      rf: 298.25,
      ellipseName: "Naval Weapons Lab., 1965"
    },
    mod_airy: {
      a: 6377340.189,
      b: 6356034.446,
      ellipseName: "Modified Airy"
    },
    andrae: {
      a: 6377104.43,
      rf: 300,
      ellipseName: "Andrae 1876 (Den., Iclnd.)"
    },
    aust_SA: {
      a: 6378160,
      rf: 298.25,
      ellipseName: "Australian Natl & S. Amer. 1969"
    },
    GRS67: {
      a: 6378160,
      rf: 298.247167427,
      ellipseName: "GRS 67(IUGG 1967)"
    },
    bessel: {
      a: 6377397.155,
      rf: 299.1528128,
      ellipseName: "Bessel 1841"
    },
    bess_nam: {
      a: 6377483.865,
      rf: 299.1528128,
      ellipseName: "Bessel 1841 (Namibia)"
    },
    clrk66: {
      a: 6378206.4,
      b: 6356583.8,
      ellipseName: "Clarke 1866"
    },
    clrk80: {
      a: 6378249.145,
      rf: 293.4663,
      ellipseName: "Clarke 1880 mod."
    },
    clrk58: {
      a: 6378293.645208759,
      rf: 294.2606763692654,
      ellipseName: "Clarke 1858"
    },
    CPM: {
      a: 6375738.7,
      rf: 334.29,
      ellipseName: "Comm. des Poids et Mesures 1799"
    },
    delmbr: {
      a: 6376428,
      rf: 311.5,
      ellipseName: "Delambre 1810 (Belgium)"
    },
    engelis: {
      a: 6378136.05,
      rf: 298.2566,
      ellipseName: "Engelis 1985"
    },
    evrst30: {
      a: 6377276.345,
      rf: 300.8017,
      ellipseName: "Everest 1830"
    },
    evrst48: {
      a: 6377304.063,
      rf: 300.8017,
      ellipseName: "Everest 1948"
    },
    evrst56: {
      a: 6377301.243,
      rf: 300.8017,
      ellipseName: "Everest 1956"
    },
    evrst69: {
      a: 6377295.664,
      rf: 300.8017,
      ellipseName: "Everest 1969"
    },
    evrstSS: {
      a: 6377298.556,
      rf: 300.8017,
      ellipseName: "Everest (Sabah & Sarawak)"
    },
    fschr60: {
      a: 6378166,
      rf: 298.3,
      ellipseName: "Fischer (Mercury Datum) 1960"
    },
    fschr60m: {
      a: 6378155,
      rf: 298.3,
      ellipseName: "Fischer 1960"
    },
    fschr68: {
      a: 6378150,
      rf: 298.3,
      ellipseName: "Fischer 1968"
    },
    helmert: {
      a: 6378200,
      rf: 298.3,
      ellipseName: "Helmert 1906"
    },
    hough: {
      a: 6378270,
      rf: 297,
      ellipseName: "Hough"
    },
    intl: {
      a: 6378388,
      rf: 297,
      ellipseName: "International 1909 (Hayford)"
    },
    kaula: {
      a: 6378163,
      rf: 298.24,
      ellipseName: "Kaula 1961"
    },
    lerch: {
      a: 6378139,
      rf: 298.257,
      ellipseName: "Lerch 1979"
    },
    mprts: {
      a: 6397300,
      rf: 191,
      ellipseName: "Maupertius 1738"
    },
    new_intl: {
      a: 6378157.5,
      b: 6356772.2,
      ellipseName: "New International 1967"
    },
    plessis: {
      a: 6376523,
      rf: 6355863,
      ellipseName: "Plessis 1817 (France)"
    },
    krass: {
      a: 6378245,
      rf: 298.3,
      ellipseName: "Krassovsky, 1942"
    },
    SEasia: {
      a: 6378155,
      b: 6356773.3205,
      ellipseName: "Southeast Asia"
    },
    walbeck: {
      a: 6376896,
      b: 6355834.8467,
      ellipseName: "Walbeck"
    },
    WGS60: {
      a: 6378165,
      rf: 298.3,
      ellipseName: "WGS 60"
    },
    WGS66: {
      a: 6378145,
      rf: 298.25,
      ellipseName: "WGS 66"
    },
    WGS72: {
      a: 6378135,
      rf: 298.26,
      ellipseName: "WGS 72"
    },
    WGS84: {
      a: 6378137,
      rf: 298.257223563,
      ellipseName: "WGS 84"
    },
    sphere: {
      a: 6370997,
      b: 6370997,
      ellipseName: "Normal Sphere (r=6370997)"
    }
  }), i("proj4/constants/Datum", {
    wgs84: {
      towgs84: "0,0,0",
      ellipse: "WGS84",
      datumName: "WGS84"
    },
    ch1903: {
      towgs84: "674.374,15.056,405.346",
      ellipse: "bessel",
      datumName: "swiss"
    },
    ggrs87: {
      towgs84: "-199.87,74.79,246.62",
      ellipse: "GRS80",
      datumName: "Greek_Geodetic_Reference_System_1987"
    },
    nad83: {
      towgs84: "0,0,0",
      ellipse: "GRS80",
      datumName: "North_American_Datum_1983"
    },
    nad27: {
      nadgrids: "@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",
      ellipse: "clrk66",
      datumName: "North_American_Datum_1927"
    },
    potsdam: {
      towgs84: "606.0,23.0,413.0",
      ellipse: "bessel",
      datumName: "Potsdam Rauenberg 1950 DHDN"
    },
    carthage: {
      towgs84: "-263.0,6.0,431.0",
      ellipse: "clark80",
      datumName: "Carthage 1934 Tunisia"
    },
    hermannskogel: {
      towgs84: "653.0,-212.0,449.0",
      ellipse: "bessel",
      datumName: "Hermannskogel"
    },
    ire65: {
      towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",
      ellipse: "mod_airy",
      datumName: "Ireland 1965"
    },
    rassadiran: {
      towgs84: "-133.63,-157.5,-158.62",
      ellipse: "intl",
      datumName: "Rassadiran"
    },
    nzgd49: {
      towgs84: "59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",
      ellipse: "intl",
      datumName: "New Zealand Geodetic Datum 1949"
    },
    osgb36: {
      towgs84: "446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",
      ellipse: "airy",
      datumName: "Airy 1830"
    },
    s_jtsk: {
      towgs84: "589,76,480",
      ellipse: "bessel",
      datumName: "S-JTSK (Ferro)"
    },
    beduaram: {
      towgs84: "-106,-87,188",
      ellipse: "clrk80",
      datumName: "Beduaram"
    },
    gunung_segara: {
      towgs84: "-403,684,41",
      ellipse: "bessel",
      datumName: "Gunung Segara Jakarta"
    }
  }), i("proj4/constants/grids", {
    "null": {
      ll: [-3.14159265, -1.57079633],
      del: [3.14159265, 1.57079633],
      lim: [3, 3],
      count: 9,
      cvs: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    }
  }), i("proj4/constants", ["require", "exports", "module", "proj4/constants/PrimeMeridian", "proj4/constants/Ellipsoid", "proj4/constants/Datum", "proj4/constants/grids"], function (t, s) {
    s.PrimeMeridian = t("proj4/constants/PrimeMeridian"), s.Ellipsoid = t("proj4/constants/Ellipsoid"), s.Datum = t("proj4/constants/Datum"), s.Datum.OSB36 = s.Datum.OSGB36, s.grids = t("proj4/constants/grids")
  }), i("proj4/projString", ["require", "proj4/common", "proj4/constants"], function (t) {
    var s = t("proj4/common"),
      i = t("proj4/constants");
    return function (t) {
      var a = {}, h = {};
      
      t.split("+").map(function (t) {
        return t.trim()
      }).filter(function (t) {
        return t
      }).forEach(function (t) {
        var s = t.split("=");
        s.push(!0), h[s[0].toLowerCase()] = s[1]
      });
      var e, n, r, o = {
          proj: "projName",
          datum: "datumCode",
          rf: function (t) {
            a.rf = parseFloat(t, 10)
          },
          lat_0: function (t) {
            a.lat0 = t * s.D2R
          },
          lat_1: function (t) {
            a.lat1 = t * s.D2R
          },
          lat_2: function (t) {
            a.lat2 = t * s.D2R
          },
          lat_ts: function (t) {
            a.lat_ts = t * s.D2R
          },
          lon_0: function (t) {
            a.long0 = t * s.D2R
          },
          lon_1: function (t) {
            a.long1 = t * s.D2R
          },
          lon_2: function (t) {
            a.long2 = t * s.D2R
          },
          alpha: function (t) {
            a.alpha = parseFloat(t) * s.D2R
          },
          lonc: function (t) {
            a.longc = t * s.D2R
          },
          x_0: function (t) {
            a.x0 = parseFloat(t, 10)
          },
          y_0: function (t) {
            a.y0 = parseFloat(t, 10)
          },
          k_0: function (t) {
            a.k0 = parseFloat(t, 10)
          },
          k: function (t) {
            a.k0 = parseFloat(t, 10)
          },
          r_a: function () {
            a.R_A = !0
          },
          zone: function (t) {
            a.zone = parseInt(t, 10)
          },
          south: function () {
            a.utmSouth = !0
          },
          towgs84: function (t) {
            a.datum_params = t.split(",").map(function (t) {
              return parseFloat(t, 10)
            })
          },
          to_meter: function (t) {
            a.to_meter = parseFloat(t, 10)
          },
          from_greenwich: function (t) {
            a.from_greenwich = t * s.D2R
          },
          pm: function (t) {
            a.from_greenwich = (i.PrimeMeridian[t] ? i.PrimeMeridian[t] : parseFloat(t, 10)) * s.D2R
          },
          nadgrids: function (t) {
            "@null" === t ? a.datumCode = "none" : a.nadgrids = t
          },
          axis: function (t) {
            var s = "ewnsud";
            3 === t.length && -1 !== s.indexOf(t.substr(0, 1)) && -1 !== s.indexOf(t.substr(1, 1)) && -1 !== s.indexOf(t.substr(2, 1)) && (a.axis = t)
          }
        };
      for (e in h) n = h[e], e in o ? (r = o[e], "function" == typeof r ? r(n) : a[r] = n) : a[e] = n;
      return a
    }
  }), i("proj4/wkt", ["require", "proj4/common", "proj4/extend"], function (t) {
    function s(t, s, a) {
      t[s] = a.map(function (t) {
        var s = {};
        return i(t, s), s
      }).reduce(function (t, s) {
        return r(t, s)
      }, {})
    }

    function i(t, a) {
      var h;
      return Array.isArray(t) ? (h = t.shift(), "PARAMETER" === h && (h = t.shift()), 1 === t.length ? Array.isArray(t[0]) ? (a[h] = {}, i(t[0], a[h])) : a[h] = t[0] : t.length ? "TOWGS84" === h ? a[h] = t : (a[h] = {}, ["UNIT", "PRIMEM", "VERT_DATUM"].indexOf(h) > -1 ? (a[h] = {
        name: t[0].toLowerCase(),
        convert: t[1]
      }, 3 === t.length && (a[h].auth = t[2])) : "SPHEROID" === h ? (a[h] = {
        name: t[0],
        a: t[1],
        rf: t[2]
      }, 4 === t.length && (a[h].auth = t[3])) : ["GEOGCS", "GEOCCS", "DATUM", "VERT_CS", "COMPD_CS", "LOCAL_CS", "FITTED_CS", "LOCAL_DATUM"].indexOf(h) > -1 ? (t[0] = ["name", t[0]], s(a, h, t)) : t.every(function (t) {
        return Array.isArray(t)
      }) ? s(a, h, t) : i(t, a[h])) : a[h] = !0, void 0) : (a[t] = !0, void 0)
    }

    function a(t, s) {
      var i = s[0],
        a = s[1];
      !(i in t) && a in t && (t[i] = t[a], 3 === s.length && (t[i] = s[2](t[i])))
    }

    function h(t) {
      return t * n.D2R
    }

    function e(t) {
      function s(s) {
        var i = t.to_meter || 1;
        return parseFloat(s, 10) * i
      }
      "GEOGCS" === t.type ? t.projName = "longlat" : "LOCAL_CS" === t.type ? (t.projName = "identity", t.local = !0) : t.projName = "object" == typeof t.PROJECTION ? Object.keys(t.PROJECTION)[0] : t.PROJECTION, t.UNIT && (t.units = t.UNIT.name.toLowerCase(), "metre" === t.units && (t.units = "meter"), t.UNIT.convert && (t.to_meter = parseFloat(t.UNIT.convert, 10))), t.GEOGCS && (t.datumCode = t.GEOGCS.DATUM ? t.GEOGCS.DATUM.name.toLowerCase() : t.GEOGCS.name.toLowerCase(), "d_" === t.datumCode.slice(0, 2) && (t.datumCode = t.datumCode.slice(2)), ("new_zealand_geodetic_datum_1949" === t.datumCode || "new_zealand_1949" === t.datumCode) && (t.datumCode = "nzgd49"), "wgs_1984" === t.datumCode && ("Mercator_Auxiliary_Sphere" === t.PROJECTION && (t.sphere = !0), t.datumCode = "wgs84"), "_ferro" === t.datumCode.slice(-6) && (t.datumCode = t.datumCode.slice(0, -6)), "_jakarta" === t.datumCode.slice(-8) && (t.datumCode = t.datumCode.slice(0, -8)), t.GEOGCS.DATUM && t.GEOGCS.DATUM.SPHEROID && (t.ellps = t.GEOGCS.DATUM.SPHEROID.name.replace("_19", "").replace(/[Cc]larke\_18/, "clrk"), "international" === t.ellps.toLowerCase().slice(0, 13) && (t.ellps = "intl"), t.a = t.GEOGCS.DATUM.SPHEROID.a, t.rf = parseFloat(t.GEOGCS.DATUM.SPHEROID.rf, 10))), t.b && !isFinite(t.b) && (t.b = t.a);
      var i = function (s) {
        return a(t, s)
      }, e = [
          ["standard_parallel_1", "Standard_Parallel_1"],
          ["standard_parallel_2", "Standard_Parallel_2"],
          ["false_easting", "False_Easting"],
          ["false_northing", "False_Northing"],
          ["central_meridian", "Central_Meridian"],
          ["latitude_of_origin", "Latitude_Of_Origin"],
          ["scale_factor", "Scale_Factor"],
          ["k0", "scale_factor"],
          ["latitude_of_center", "Latitude_of_center"],
          ["lat0", "latitude_of_center", h],
          ["longitude_of_center", "Longitude_Of_Center"],
          ["longc", "longitude_of_center", h],
          ["x0", "false_easting", s],
          ["y0", "false_northing", s],
          ["long0", "central_meridian", h],
          ["lat0", "latitude_of_origin", h],
          ["lat0", "standard_parallel_1", h],
          ["lat1", "standard_parallel_1", h],
          ["lat2", "standard_parallel_2", h],
          ["alpha", "azimuth", h],
          ["srsCode", "name"]
        ];
      e.forEach(i), t.long0 || !t.longc || "Albers_Conic_Equal_Area" !== t.PROJECTION && "Lambert_Azimuthal_Equal_Area" !== t.PROJECTION || (t.long0 = t.longc)
    }
    var n = t("proj4/common"),
      r = t("proj4/extend");
    return function (t, s) {
      var a = JSON.parse(("," + t).replace(/\s*\,\s*([A-Z_0-9]+?)(\[)/g, ',["$1",').slice(1).replace(/\s*\,\s*([A-Z_0-9]+?)\]/g, ',"$1"]')),
        h = a.shift(),
        n = a.shift();
      a.unshift(["name", n]), a.unshift(["type", h]), a.unshift("output");
      var o = {};
      return i(a, o), e(o.output), r(s, o.output)
    }
  }), i("proj4/defs", ["require", "proj4/global", "proj4/projString", "proj4/wkt"], function (t) {
    function s(t) {
      var i = this;
      if (2 === arguments.length) s[t] = "+" === arguments[1][0] ? a(arguments[1]) : h(arguments[1]);
      else if (1 === arguments.length) return Array.isArray(t) ? t.map(function (t) {
        Array.isArray(t) ? s.apply(i, t) : s(t)
      }) : ("string" == typeof t || ("EPSG" in t ? s["EPSG:" + t.EPSG] = t : "ESRI" in t ? s["ESRI:" + t.ESRI] = t : "IAU2000" in t ? s["IAU2000:" + t.IAU2000] = t : console.log(t)), void 0)
    }
    var i = t("proj4/global"),
      a = t("proj4/projString"),
      h = t("proj4/wkt");
    return i(s), s
  }), i("proj4/datum", ["require", "proj4/common"], function (t) {
    var s = t("proj4/common"),
      i = function (t) {
        if (!(this instanceof i)) return new i(t);
        if (this.datum_type = s.PJD_WGS84, t) {
          if (t.datumCode && "none" === t.datumCode && (this.datum_type = s.PJD_NODATUM), t.datum_params) {
            for (var a = 0; a < t.datum_params.length; a++) t.datum_params[a] = parseFloat(t.datum_params[a]);
            (0 !== t.datum_params[0] || 0 !== t.datum_params[1] || 0 !== t.datum_params[2]) && (this.datum_type = s.PJD_3PARAM), t.datum_params.length > 3 && (0 !== t.datum_params[3] || 0 !== t.datum_params[4] || 0 !== t.datum_params[5] || 0 !== t.datum_params[6]) && (this.datum_type = s.PJD_7PARAM, t.datum_params[3] *= s.SEC_TO_RAD, t.datum_params[4] *= s.SEC_TO_RAD, t.datum_params[5] *= s.SEC_TO_RAD, t.datum_params[6] = t.datum_params[6] / 1e6 + 1)
          }
          this.datum_type = t.grids ? s.PJD_GRIDSHIFT : this.datum_type, this.a = t.a, this.b = t.b, this.es = t.es, this.ep2 = t.ep2, this.datum_params = t.datum_params, this.datum_type === s.PJD_GRIDSHIFT && (this.grids = t.grids)
        }
      };
    return i.prototype = {
      compare_datums: function (t) {
        return this.datum_type !== t.datum_type ? !1 : this.a !== t.a || Math.abs(this.es - t.es) > 5e-11 ? !1 : this.datum_type === s.PJD_3PARAM ? this.datum_params[0] === t.datum_params[0] && this.datum_params[1] === t.datum_params[1] && this.datum_params[2] === t.datum_params[2] : this.datum_type === s.PJD_7PARAM ? this.datum_params[0] === t.datum_params[0] && this.datum_params[1] === t.datum_params[1] && this.datum_params[2] === t.datum_params[2] && this.datum_params[3] === t.datum_params[3] && this.datum_params[4] === t.datum_params[4] && this.datum_params[5] === t.datum_params[5] && this.datum_params[6] === t.datum_params[6] : this.datum_type === s.PJD_GRIDSHIFT || t.datum_type === s.PJD_GRIDSHIFT ? this.nadgrids === t.nadgrids : !0
      },
      geodetic_to_geocentric: function (t) {
        var i, a, h, e, n, r, o, l = t.x,
          u = t.y,
          p = t.z ? t.z : 0,
          c = 0;
        if (u < -s.HALF_PI && u > -1.001 * s.HALF_PI) u = -s.HALF_PI;
        else if (u > s.HALF_PI && u < 1.001 * s.HALF_PI) u = s.HALF_PI;
        else if (u < -s.HALF_PI || u > s.HALF_PI) return null;
        return l > s.PI && (l -= 2 * s.PI), n = Math.sin(u), o = Math.cos(u), r = n * n, e = this.a / Math.sqrt(1 - this.es * r), i = (e + p) * o * Math.cos(l), a = (e + p) * o * Math.sin(l), h = (e * (1 - this.es) + p) * n, t.x = i, t.y = a, t.z = h, c
      },
      geocentric_to_geodetic: function (t) {
        var i, a, h, e, n, r, o, l, u, p, c, m, M, f, d, _, y, j = 1e-12,
          x = j * j,
          g = 30,
          v = t.x,
          P = t.y,
          b = t.z ? t.z : 0;
        if (M = !1, i = Math.sqrt(v * v + P * P), a = Math.sqrt(v * v + P * P + b * b), i / this.a < j) {
          if (M = !0, d = 0, a / this.a < j) return _ = s.HALF_PI, y = -this.b, void 0
        } else d = Math.atan2(P, v);
        h = b / a, e = i / a, n = 1 / Math.sqrt(1 - this.es * (2 - this.es) * e * e), l = e * (1 - this.es) * n, u = h * n, f = 0;
        do f++, o = this.a / Math.sqrt(1 - this.es * u * u), y = i * l + b * u - o * (1 - this.es * u * u), r = this.es * o / (o + y), n = 1 / Math.sqrt(1 - r * (2 - r) * e * e), p = e * (1 - r) * n, c = h * n, m = c * l - p * u, l = p, u = c; while (m * m > x && g > f);
        return _ = Math.atan(c / Math.abs(p)), t.x = d, t.y = _, t.z = y, t
      },
      geocentric_to_geodetic_noniter: function (t) {
        var i, a, h, e, n, r, o, l, u, p, c, m, M, f, d, _, y, j = t.x,
          x = t.y,
          g = t.z ? t.z : 0;
        if (j = parseFloat(j), x = parseFloat(x), g = parseFloat(g), y = !1, 0 !== j) i = Math.atan2(x, j);
        else if (x > 0) i = s.HALF_PI;
        else if (0 > x) i = -s.HALF_PI;
        else if (y = !0, i = 0, g > 0) a = s.HALF_PI;
        else {
          if (!(0 > g)) return a = s.HALF_PI, h = -this.b, void 0;
          a = -s.HALF_PI
        }
        return n = j * j + x * x, e = Math.sqrt(n), r = g * s.AD_C, l = Math.sqrt(r * r + n), p = r / l, m = e / l, c = p * p * p, o = g + this.b * this.ep2 * c, _ = e - this.a * this.es * m * m * m, u = Math.sqrt(o * o + _ * _), M = o / u, f = _ / u, d = this.a / Math.sqrt(1 - this.es * M * M), h = f >= s.COS_67P5 ? e / f - d : f <= -s.COS_67P5 ? e / -f - d : g / M + d * (this.es - 1), y === !1 && (a = Math.atan(M / f)), t.x = i, t.y = a, t.z = h, t
      },
      geocentric_to_wgs84: function (t) {
        if (this.datum_type === s.PJD_3PARAM) t.x += this.datum_params[0], t.y += this.datum_params[1], t.z += this.datum_params[2];
        else if (this.datum_type === s.PJD_7PARAM) {
          var i = this.datum_params[0],
            a = this.datum_params[1],
            h = this.datum_params[2],
            e = this.datum_params[3],
            n = this.datum_params[4],
            r = this.datum_params[5],
            o = this.datum_params[6],
            l = o * (t.x - r * t.y + n * t.z) + i,
            u = o * (r * t.x + t.y - e * t.z) + a,
            p = o * (-n * t.x + e * t.y + t.z) + h;
          t.x = l, t.y = u, t.z = p
        }
      },
      geocentric_from_wgs84: function (t) {
        if (this.datum_type === s.PJD_3PARAM) t.x -= this.datum_params[0], t.y -= this.datum_params[1], t.z -= this.datum_params[2];
        else if (this.datum_type === s.PJD_7PARAM) {
          var i = this.datum_params[0],
            a = this.datum_params[1],
            h = this.datum_params[2],
            e = this.datum_params[3],
            n = this.datum_params[4],
            r = this.datum_params[5],
            o = this.datum_params[6],
            l = (t.x - i) / o,
            u = (t.y - a) / o,
            p = (t.z - h) / o;
          t.x = l + r * u - n * p, t.y = -r * l + u + e * p, t.z = n * l - e * u + p
        }
      }
    }, i
  }), i("proj4/projCode/tmerc", ["require", "exports", "module", "proj4/common"], function (t, s) {
    var i = t("proj4/common");
    s.init = function () {
      this.e0 = i.e0fn(this.es), this.e1 = i.e1fn(this.es), this.e2 = i.e2fn(this.es), this.e3 = i.e3fn(this.es), this.ml0 = this.a * i.mlfn(this.e0, this.e1, this.e2, this.e3, this.lat0)
    }, s.forward = function (t) {
      var s, a, h, e = t.x,
        n = t.y,
        r = i.adjust_lon(e - this.long0),
        o = Math.sin(n),
        l = Math.cos(n);
      if (this.sphere) {
        var u = l * Math.sin(r);
        if (Math.abs(Math.abs(u) - 1) < 1e-10) return 93;
        a = .5 * this.a * this.k0 * Math.log((1 + u) / (1 - u)), s = Math.acos(l * Math.cos(r) / Math.sqrt(1 - u * u)), 0 > n && (s = -s), h = this.a * this.k0 * (s - this.lat0)
      } else {
        var p = l * r,
          c = Math.pow(p, 2),
          m = this.ep2 * Math.pow(l, 2),
          M = Math.tan(n),
          f = Math.pow(M, 2);
        s = 1 - this.es * Math.pow(o, 2);
        var d = this.a / Math.sqrt(s),
          _ = this.a * i.mlfn(this.e0, this.e1, this.e2, this.e3, n);
        a = this.k0 * d * p * (1 + c / 6 * (1 - f + m + c / 20 * (5 - 18 * f + Math.pow(f, 2) + 72 * m - 58 * this.ep2))) + this.x0, h = this.k0 * (_ - this.ml0 + d * M * c * (.5 + c / 24 * (5 - f + 9 * m + 4 * Math.pow(m, 2) + c / 30 * (61 - 58 * f + Math.pow(f, 2) + 600 * m - 330 * this.ep2)))) + this.y0
      }
      return t.x = a, t.y = h, t
    }, s.inverse = function (t) {
      var s, a, h, e, n, r, o = 6;
      if (this.sphere) {
        var l = Math.exp(t.x / (this.a * this.k0)),
          u = .5 * (l - 1 / l),
          p = this.lat0 + t.y / (this.a * this.k0),
          c = Math.cos(p);
        s = Math.sqrt((1 - c * c) / (1 + u * u)), n = i.asinz(s), 0 > p && (n = -n), r = 0 === u && 0 === c ? this.long0 : i.adjust_lon(Math.atan2(u, c) + this.long0)
      } else {
        var m = t.x - this.x0,
          M = t.y - this.y0;
        for (s = (this.ml0 + M / this.k0) / this.a, a = s, e = 0; !0 && (h = (s + this.e1 * Math.sin(2 * a) - this.e2 * Math.sin(4 * a) + this.e3 * Math.sin(6 * a)) / this.e0 - a, a += h, !(Math.abs(h) <= i.EPSLN)); e++)
          if (e >= o) return 95;
        if (Math.abs(a) < i.HALF_PI) {
          var f = Math.sin(a),
            d = Math.cos(a),
            _ = Math.tan(a),
            y = this.ep2 * Math.pow(d, 2),
            j = Math.pow(y, 2),
            x = Math.pow(_, 2),
            g = Math.pow(x, 2);
          s = 1 - this.es * Math.pow(f, 2);
          var v = this.a / Math.sqrt(s),
            P = v * (1 - this.es) / s,
            b = m / (v * this.k0),
            C = Math.pow(b, 2);
          n = a - v * _ * C / P * (.5 - C / 24 * (5 + 3 * x + 10 * y - 4 * j - 9 * this.ep2 - C / 30 * (61 + 90 * x + 298 * y + 45 * g - 252 * this.ep2 - 3 * j))), r = i.adjust_lon(this.long0 + b * (1 - C / 6 * (1 + 2 * x + y - C / 20 * (5 - 2 * y + 28 * x - 3 * j + 8 * this.ep2 + 24 * g))) / d)
        } else n = i.HALF_PI * i.sign(M), r = this.long0
      }
      return t.x = r, t.y = n, t
    }, s.names = ["Transverse_Mercator", "Transverse Mercator", "tmerc"]
  }), i("proj4/projCode/utm", ["require", "exports", "module", "proj4/common", "proj4/projCode/tmerc"], function (t, s) {
    var i = t("proj4/common"),
      a = t("proj4/projCode/tmerc");
    s.dependsOn = "tmerc", s.init = function () {
      this.zone && (this.lat0 = 0, this.long0 = (6 * Math.abs(this.zone) - 183) * i.D2R, this.x0 = 5e5, this.y0 = this.utmSouth ? 1e7 : 0, this.k0 = .9996, a.init.apply(this), this.forward = a.forward, this.inverse = a.inverse)
    }, s.names = ["Universal Transverse Mercator System", "utm"]
  }), i("proj4/projCode/gauss", ["require", "exports", "module", "proj4/common"], function (t, s) {
    var i = t("proj4/common");
    s.init = function () {
      var t = Math.sin(this.lat0),
        s = Math.cos(this.lat0);
      s *= s, this.rc = Math.sqrt(1 - this.es) / (1 - this.es * t * t), this.C = Math.sqrt(1 + this.es * s * s / (1 - this.es)), this.phic0 = Math.asin(t / this.C), this.ratexp = .5 * this.C * this.e, this.K = Math.tan(.5 * this.phic0 + i.FORTPI) / (Math.pow(Math.tan(.5 * this.lat0 + i.FORTPI), this.C) * i.srat(this.e * t, this.ratexp))
    }, s.forward = function (t) {
      var s = t.x,
        a = t.y;
      return t.y = 2 * Math.atan(this.K * Math.pow(Math.tan(.5 * a + i.FORTPI), this.C) * i.srat(this.e * Math.sin(a), this.ratexp)) - i.HALF_PI, t.x = this.C * s, t
    }, s.inverse = function (t) {
      for (var s = 1e-14, a = t.x / this.C, h = t.y, e = Math.pow(Math.tan(.5 * h + i.FORTPI) / this.K, 1 / this.C), n = i.MAX_ITER; n > 0 && (h = 2 * Math.atan(e * i.srat(this.e * Math.sin(t.y), -.5 * this.e)) - i.HALF_PI, !(Math.abs(h - t.y) < s)); --n) t.y = h;
      return n ? (t.x = a, t.y = h, t) : null
    }, s.names = ["gauss"]
  }), i("proj4/projCode/sterea", ["require", "exports", "module", "proj4/common", "proj4/projCode/gauss"], function (t, s) {
    var i = t("proj4/common"),
      a = t("proj4/projCode/gauss");
    s.init = function () {
      a.init.apply(this), this.rc && (this.sinc0 = Math.sin(this.phic0), this.cosc0 = Math.cos(this.phic0), this.R2 = 2 * this.rc, this.title || (this.title = "Oblique Stereographic Alternative"))
    }, s.forward = function (t) {
      var s, h, e, n;
      return t.x = i.adjust_lon(t.x - this.long0), a.forward.apply(this, [t]), s = Math.sin(t.y), h = Math.cos(t.y), e = Math.cos(t.x), n = this.k0 * this.R2 / (1 + this.sinc0 * s + this.cosc0 * h * e), t.x = n * h * Math.sin(t.x), t.y = n * (this.cosc0 * s - this.sinc0 * h * e), t.x = this.a * t.x + this.x0, t.y = this.a * t.y + this.y0, t
    }, s.inverse = function (t) {
      var s, h, e, n, r;
      if (t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a, t.x /= this.k0, t.y /= this.k0, r = Math.sqrt(t.x * t.x + t.y * t.y)) {
        var o = 2 * Math.atan2(r, this.R2);
        s = Math.sin(o), h = Math.cos(o), n = Math.asin(h * this.sinc0 + t.y * s * this.cosc0 / r), e = Math.atan2(t.x * s, r * this.cosc0 * h - t.y * this.sinc0 * s)
      } else n = this.phic0, e = 0;
      return t.x = e, t.y = n, a.inverse.apply(this, [t]), t.x = i.adjust_lon(t.x + this.long0), t
    }, s.names = ["Stereographic_North_Pole", "Oblique_Stereographic", "Polar_Stereographic", "sterea"]
  }), i("proj4/projCode/stere", ["require", "exports", "module", "proj4/common"], function (t, s) {
    var i = t("proj4/common");
    s.ssfn_ = function (t, s, a) {
      return s *= a, Math.tan(.5 * (i.HALF_PI + t)) * Math.pow((1 - s) / (1 + s), .5 * a)
    }, s.init = function () {
      this.coslat0 = Math.cos(this.lat0), this.sinlat0 = Math.sin(this.lat0), this.sphere ? 1 === this.k0 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= i.EPSLN && (this.k0 = .5 * (1 + i.sign(this.lat0) * Math.sin(this.lat_ts))) : (Math.abs(this.coslat0) <= i.EPSLN && (this.con = this.lat0 > 0 ? 1 : -1), this.cons = Math.sqrt(Math.pow(1 + this.e, 1 + this.e) * Math.pow(1 - this.e, 1 - this.e)), 1 === this.k0 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= i.EPSLN && (this.k0 = .5 * this.cons * i.msfnz(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) / i.tsfnz(this.e, this.con * this.lat_ts, this.con * Math.sin(this.lat_ts))), this.ms1 = i.msfnz(this.e, this.sinlat0, this.coslat0), this.X0 = 2 * Math.atan(this.ssfn_(this.lat0, this.sinlat0, this.e)) - i.HALF_PI, this.cosX0 = Math.cos(this.X0), this.sinX0 = Math.sin(this.X0))
    }, s.forward = function (t) {
      var s, a, h, e, n, r, o = t.x,
        l = t.y,
        u = Math.sin(l),
        p = Math.cos(l),
        c = i.adjust_lon(o - this.long0);
      return Math.abs(Math.abs(o - this.long0) - i.PI) <= i.EPSLN && Math.abs(l + this.lat0) <= i.EPSLN ? (t.x = 0 / 0, t.y = 0 / 0, t) : this.sphere ? (s = 2 * this.k0 / (1 + this.sinlat0 * u + this.coslat0 * p * Math.cos(c)), t.x = this.a * s * p * Math.sin(c) + this.x0, t.y = this.a * s * (this.coslat0 * u - this.sinlat0 * p * Math.cos(c)) + this.y0, t) : (a = 2 * Math.atan(this.ssfn_(l, u, this.e)) - i.HALF_PI, e = Math.cos(a), h = Math.sin(a), Math.abs(this.coslat0) <= i.EPSLN ? (n = i.tsfnz(this.e, l * this.con, this.con * u), r = 2 * this.a * this.k0 * n / this.cons, t.x = this.x0 + r * Math.sin(o - this.long0), t.y = this.y0 - this.con * r * Math.cos(o - this.long0), t) : (Math.abs(this.sinlat0) < i.EPSLN ? (s = 2 * this.a * this.k0 / (1 + e * Math.cos(c)), t.y = s * h) : (s = 2 * this.a * this.k0 * this.ms1 / (this.cosX0 * (1 + this.sinX0 * h + this.cosX0 * e * Math.cos(c))), t.y = s * (this.cosX0 * h - this.sinX0 * e * Math.cos(c)) + this.y0), t.x = s * e * Math.sin(c) + this.x0, t))
    }, s.inverse = function (t) {
      t.x -= this.x0, t.y -= this.y0;
      var s, a, h, e, n, r = Math.sqrt(t.x * t.x + t.y * t.y);
      if (this.sphere) {
        var o = 2 * Math.atan(r / (.5 * this.a * this.k0));
        return s = this.long0, a = this.lat0, r <= i.EPSLN ? (t.x = s, t.y = a, t) : (a = Math.asin(Math.cos(o) * this.sinlat0 + t.y * Math.sin(o) * this.coslat0 / r), s = Math.abs(this.coslat0) < i.EPSLN ? this.lat0 > 0 ? i.adjust_lon(this.long0 + Math.atan2(t.x, -1 * t.y)) : i.adjust_lon(this.long0 + Math.atan2(t.x, t.y)) : i.adjust_lon(this.long0 + Math.atan2(t.x * Math.sin(o), r * this.coslat0 * Math.cos(o) - t.y * this.sinlat0 * Math.sin(o))), t.x = s, t.y = a, t)
      }
      if (Math.abs(this.coslat0) <= i.EPSLN) {
        if (r <= i.EPSLN) return a = this.lat0, s = this.long0, t.x = s, t.y = a, t;
        t.x *= this.con, t.y *= this.con, h = r * this.cons / (2 * this.a * this.k0), a = this.con * i.phi2z(this.e, h), s = this.con * i.adjust_lon(this.con * this.long0 + Math.atan2(t.x, -1 * t.y))
      } else e = 2 * Math.atan(r * this.cosX0 / (2 * this.a * this.k0 * this.ms1)), s = this.long0, r <= i.EPSLN ? n = this.X0 : (n = Math.asin(Math.cos(e) * this.sinX0 + t.y * Math.sin(e) * this.cosX0 / r), s = i.adjust_lon(this.long0 + Math.atan2(t.x * Math.sin(e), r * this.cosX0 * Math.cos(e) - t.y * this.sinX0 * Math.sin(e)))), a = -1 * i.phi2z(this.e, Math.tan(.5 * (i.HALF_PI + n)));
      return t.x = s, t.y = a, t
    }, s.names = ["stere"]
  }), i("proj4/projCode/somerc", ["require", "exports", "module"], function (t, s) {
    s.init = function () {
      var t = this.lat0;
      this.lambda0 = this.long0;
      var s = Math.sin(t),
        i = this.a,
        a = this.rf,
        h = 1 / a,
        e = 2 * h - Math.pow(h, 2),
        n = this.e = Math.sqrt(e);
      this.R = this.k0 * i * Math.sqrt(1 - e) / (1 - e * Math.pow(s, 2)), this.alpha = Math.sqrt(1 + e / (1 - e) * Math.pow(Math.cos(t), 4)), this.b0 = Math.asin(s / this.alpha);
      var r = Math.log(Math.tan(Math.PI / 4 + this.b0 / 2)),
        o = Math.log(Math.tan(Math.PI / 4 + t / 2)),
        l = Math.log((1 + n * s) / (1 - n * s));
      this.K = r - this.alpha * o + this.alpha * n / 2 * l
    }, s.forward = function (t) {
      var s = Math.log(Math.tan(Math.PI / 4 - t.y / 2)),
        i = this.e / 2 * Math.log((1 + this.e * Math.sin(t.y)) / (1 - this.e * Math.sin(t.y))),
        a = -this.alpha * (s + i) + this.K,
        h = 2 * (Math.atan(Math.exp(a)) - Math.PI / 4),
        e = this.alpha * (t.x - this.lambda0),
        n = Math.atan(Math.sin(e) / (Math.sin(this.b0) * Math.tan(h) + Math.cos(this.b0) * Math.cos(e))),
        r = Math.asin(Math.cos(this.b0) * Math.sin(h) - Math.sin(this.b0) * Math.cos(h) * Math.cos(e));
      return t.y = this.R / 2 * Math.log((1 + Math.sin(r)) / (1 - Math.sin(r))) + this.y0, t.x = this.R * n + this.x0, t
    }, s.inverse = function (t) {
      for (var s = t.x - this.x0, i = t.y - this.y0, a = s / this.R, h = 2 * (Math.atan(Math.exp(i / this.R)) - Math.PI / 4), e = Math.asin(Math.cos(this.b0) * Math.sin(h) + Math.sin(this.b0) * Math.cos(h) * Math.cos(a)), n = Math.atan(Math.sin(a) / (Math.cos(this.b0) * Math.cos(a) - Math.sin(this.b0) * Math.tan(h))), r = this.lambda0 + n / this.alpha, o = 0, l = e, u = -1e3, p = 0; Math.abs(l - u) > 1e-7;) {
        if (++p > 20) return;
        o = 1 / this.alpha * (Math.log(Math.tan(Math.PI / 4 + e / 2)) - this.K) + this.e * Math.log(Math.tan(Math.PI / 4 + Math.asin(this.e * Math.sin(l)) / 2)), u = l, l = 2 * Math.atan(Math.exp(o)) - Math.PI / 2
      }
      return t.x = r, t.y = l, t
    }, s.names = ["somerc"]
  }), i("proj4/projCode/omerc", ["require", "exports", "module", "proj4/common"], function (t, s) {
    var i = t("proj4/common");
    s.init = function () {
      this.no_off = this.no_off || !1, this.no_rot = this.no_rot || !1, isNaN(this.k0) && (this.k0 = 1);
      var t = Math.sin(this.lat0),
        s = Math.cos(this.lat0),
        a = this.e * t;
      this.bl = Math.sqrt(1 + this.es / (1 - this.es) * Math.pow(s, 4)), this.al = this.a * this.bl * this.k0 * Math.sqrt(1 - this.es) / (1 - a * a);
      var h = i.tsfnz(this.e, this.lat0, t),
        e = this.bl / s * Math.sqrt((1 - this.es) / (1 - a * a));
      1 > e * e && (e = 1);
      var n, r;
      if (isNaN(this.longc)) {
        var o = i.tsfnz(this.e, this.lat1, Math.sin(this.lat1)),
          l = i.tsfnz(this.e, this.lat2, Math.sin(this.lat2));
        this.el = this.lat0 >= 0 ? (e + Math.sqrt(e * e - 1)) * Math.pow(h, this.bl) : (e - Math.sqrt(e * e - 1)) * Math.pow(h, this.bl);
        var u = Math.pow(o, this.bl),
          p = Math.pow(l, this.bl);
        n = this.el / u, r = .5 * (n - 1 / n);
        var c = (this.el * this.el - p * u) / (this.el * this.el + p * u),
          m = (p - u) / (p + u),
          M = i.adjust_lon(this.long1 - this.long2);
        this.long0 = .5 * (this.long1 + this.long2) - Math.atan(c * Math.tan(.5 * this.bl * M) / m) / this.bl, this.long0 = i.adjust_lon(this.long0);
        var f = i.adjust_lon(this.long1 - this.long0);
        this.gamma0 = Math.atan(Math.sin(this.bl * f) / r), this.alpha = Math.asin(e * Math.sin(this.gamma0))
      } else n = this.lat0 >= 0 ? e + Math.sqrt(e * e - 1) : e - Math.sqrt(e * e - 1), this.el = n * Math.pow(h, this.bl), r = .5 * (n - 1 / n), this.gamma0 = Math.asin(Math.sin(this.alpha) / e), this.long0 = this.longc - Math.asin(r * Math.tan(this.gamma0)) / this.bl;
      this.uc = this.no_off ? 0 : this.lat0 >= 0 ? this.al / this.bl * Math.atan2(Math.sqrt(e * e - 1), Math.cos(this.alpha)) : -1 * this.al / this.bl * Math.atan2(Math.sqrt(e * e - 1), Math.cos(this.alpha))
    }, s.forward = function (t) {
      var s, a, h, e = t.x,
        n = t.y,
        r = i.adjust_lon(e - this.long0);
      if (Math.abs(Math.abs(n) - i.HALF_PI) <= i.EPSLN) h = n > 0 ? -1 : 1, a = this.al / this.bl * Math.log(Math.tan(i.FORTPI + .5 * h * this.gamma0)), s = -1 * h * i.HALF_PI * this.al / this.bl;
      else {
        var o = i.tsfnz(this.e, n, Math.sin(n)),
          l = this.el / Math.pow(o, this.bl),
          u = .5 * (l - 1 / l),
          p = .5 * (l + 1 / l),
          c = Math.sin(this.bl * r),
          m = (u * Math.sin(this.gamma0) - c * Math.cos(this.gamma0)) / p;
        a = Math.abs(Math.abs(m) - 1) <= i.EPSLN ? Number.POSITIVE_INFINITY : .5 * this.al * Math.log((1 - m) / (1 + m)) / this.bl, s = Math.abs(Math.cos(this.bl * r)) <= i.EPSLN ? this.al * this.bl * r : this.al * Math.atan2(u * Math.cos(this.gamma0) + c * Math.sin(this.gamma0), Math.cos(this.bl * r)) / this.bl
      }
      return this.no_rot ? (t.x = this.x0 + s, t.y = this.y0 + a) : (s -= this.uc, t.x = this.x0 + a * Math.cos(this.alpha) + s * Math.sin(this.alpha), t.y = this.y0 + s * Math.cos(this.alpha) - a * Math.sin(this.alpha)), t
    }, s.inverse = function (t) {
      var s, a;
      this.no_rot ? (a = t.y - this.y0, s = t.x - this.x0) : (a = (t.x - this.x0) * Math.cos(this.alpha) - (t.y - this.y0) * Math.sin(this.alpha), s = (t.y - this.y0) * Math.cos(this.alpha) + (t.x - this.x0) * Math.sin(this.alpha), s += this.uc);
      var h = Math.exp(-1 * this.bl * a / this.al),
        e = .5 * (h - 1 / h),
        n = .5 * (h + 1 / h),
        r = Math.sin(this.bl * s / this.al),
        o = (r * Math.cos(this.gamma0) + e * Math.sin(this.gamma0)) / n,
        l = Math.pow(this.el / Math.sqrt((1 + o) / (1 - o)), 1 / this.bl);
      return Math.abs(o - 1) < i.EPSLN ? (t.x = this.long0, t.y = i.HALF_PI) : Math.abs(o + 1) < i.EPSLN ? (t.x = this.long0, t.y = -1 * i.HALF_PI) : (t.y = i.phi2z(this.e, l), t.x = i.adjust_lon(this.long0 - Math.atan2(e * Math.cos(this.gamma0) - r * Math.sin(this.gamma0), Math.cos(this.bl * s / this.al)) / this.bl)), t
    }, s.names = ["Hotine_Oblique_Mercator", "Hotine Oblique Mercator", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin", "Hotine_Oblique_Mercator_Azimuth_Center", "omerc"]
  }), i("proj4/projCode/lcc", ["require", "exports", "module", "proj4/common"], function (t, s) {
    var i = t("proj4/common");
    s.init = function () {
      if (this.lat2 || (this.lat2 = this.lat1), this.k0 || (this.k0 = 1), !(Math.abs(this.lat1 + this.lat2) < i.EPSLN)) {
        var t = this.b / this.a;
        this.e = Math.sqrt(1 - t * t);
        var s = Math.sin(this.lat1),
          a = Math.cos(this.lat1),
          h = i.msfnz(this.e, s, a),
          e = i.tsfnz(this.e, this.lat1, s),
          n = Math.sin(this.lat2),
          r = Math.cos(this.lat2),
          o = i.msfnz(this.e, n, r),
          l = i.tsfnz(this.e, this.lat2, n),
          u = i.tsfnz(this.e, this.lat0, Math.sin(this.lat0));
        this.ns = Math.abs(this.lat1 - this.lat2) > i.EPSLN ? Math.log(h / o) / Math.log(e / l) : s, isNaN(this.ns) && (this.ns = s), this.f0 = h / (this.ns * Math.pow(e, this.ns)), this.rh = this.a * this.f0 * Math.pow(u, this.ns), this.title || (this.title = "Lambert Conformal Conic")
      }
    }, s.forward = function (t) {
      var s = t.x,
        a = t.y;
      Math.abs(2 * Math.abs(a) - i.PI) <= i.EPSLN && (a = i.sign(a) * (i.HALF_PI - 2 * i.EPSLN));
      var h, e, n = Math.abs(Math.abs(a) - i.HALF_PI);
      if (n > i.EPSLN) h = i.tsfnz(this.e, a, Math.sin(a)), e = this.a * this.f0 * Math.pow(h, this.ns);
      else {
        if (n = a * this.ns, 0 >= n) return null;
        e = 0
      }
      var r = this.ns * i.adjust_lon(s - this.long0);
      return t.x = this.k0 * e * Math.sin(r) + this.x0, t.y = this.k0 * (this.rh - e * Math.cos(r)) + this.y0, t
    }, s.inverse = function (t) {
      var s, a, h, e, n, r = (t.x - this.x0) / this.k0,
        o = this.rh - (t.y - this.y0) / this.k0;
      this.ns > 0 ? (s = Math.sqrt(r * r + o * o), a = 1) : (s = -Math.sqrt(r * r + o * o), a = -1);
      var l = 0;
      if (0 !== s && (l = Math.atan2(a * r, a * o)), 0 !== s || this.ns > 0) {
        if (a = 1 / this.ns, h = Math.pow(s / (this.a * this.f0), a), e = i.phi2z(this.e, h), -9999 === e) return null
      } else e = -i.HALF_PI;
      return n = i.adjust_lon(l / this.ns + this.long0), t.x = n, t.y = e, t
    }, s.names = ["Lambert Tangential Conformal Conic Projection", "Lambert_Conformal_Conic", "Lambert_Conformal_Conic_2SP", "lcc"]
  }), i("proj4/projCode/krovak", ["require", "exports", "module", "proj4/common"], function (t, s) {
    var i = t("proj4/common");
    s.init = function () {
      this.a = 6377397.155, this.es = .006674372230614, this.e = Math.sqrt(this.es), this.lat0 || (this.lat0 = .863937979737193), this.long0 || (this.long0 = .4334234309119251), this.k0 || (this.k0 = .9999), this.s45 = .785398163397448, this.s90 = 2 * this.s45, this.fi0 = this.lat0, this.e2 = this.es, this.e = Math.sqrt(this.e2), this.alfa = Math.sqrt(1 + this.e2 * Math.pow(Math.cos(this.fi0), 4) / (1 - this.e2)), this.uq = 1.04216856380474, this.u0 = Math.asin(Math.sin(this.fi0) / this.alfa), this.g = Math.pow((1 + this.e * Math.sin(this.fi0)) / (1 - this.e * Math.sin(this.fi0)), this.alfa * this.e / 2), this.k = Math.tan(this.u0 / 2 + this.s45) / Math.pow(Math.tan(this.fi0 / 2 + this.s45), this.alfa) * this.g, this.k1 = this.k0, this.n0 = this.a * Math.sqrt(1 - this.e2) / (1 - this.e2 * Math.pow(Math.sin(this.fi0), 2)), this.s0 = 1.37008346281555, this.n = Math.sin(this.s0), this.ro0 = this.k1 * this.n0 / Math.tan(this.s0), this.ad = this.s90 - this.uq
    }, s.forward = function (t) {
      var s, a, h, e, n, r, o, l = t.x,
        u = t.y,
        p = i.adjust_lon(l - this.long0);
      return s = Math.pow((1 + this.e * Math.sin(u)) / (1 - this.e * Math.sin(u)), this.alfa * this.e / 2), a = 2 * (Math.atan(this.k * Math.pow(Math.tan(u / 2 + this.s45), this.alfa) / s) - this.s45), h = -p * this.alfa, e = Math.asin(Math.cos(this.ad) * Math.sin(a) + Math.sin(this.ad) * Math.cos(a) * Math.cos(h)), n = Math.asin(Math.cos(a) * Math.sin(h) / Math.cos(e)), r = this.n * n, o = this.ro0 * Math.pow(Math.tan(this.s0 / 2 + this.s45), this.n) / Math.pow(Math.tan(e / 2 + this.s45), this.n), t.y = o * Math.cos(r) / 1, t.x = o * Math.sin(r) / 1, this.czech || (t.y *= -1, t.x *= -1), t
    }, s.inverse = function (t) {
      var s, i, a, h, e, n, r, o, l = t.x;
      t.x = t.y, t.y = l, this.czech || (t.y *= -1, t.x *= -1), n = Math.sqrt(t.x * t.x + t.y * t.y), e = Math.atan2(t.y, t.x), h = e / Math.sin(this.s0), a = 2 * (Math.atan(Math.pow(this.ro0 / n, 1 / this.n) * Math.tan(this.s0 / 2 + this.s45)) - this.s45), s = Math.asin(Math.cos(this.ad) * Math.sin(a) - Math.sin(this.ad) * Math.cos(a) * Math.cos(h)), i = Math.asin(Math.cos(a) * Math.sin(h) / Math.cos(s)), t.x = this.long0 - i / this.alfa, r = s, o = 0;
      var u = 0;
      do t.y = 2 * (Math.atan(Math.pow(this.k, -1 / this.alfa) * Math.pow(Math.tan(s / 2 + this.s45), 1 / this.alfa) * Math.pow((1 + this.e * Math.sin(r)) / (1 - this.e * Math.sin(r)), this.e / 2)) - this.s45), Math.abs(r - t.y) < 1e-10 && (o = 1), r = t.y, u += 1; while (0 === o && 15 > u);
      return u >= 15 ? null : t
    }, s.names = ["Krovak", "krovak"]
  }), i("proj4/projCode/cass", ["require", "exports", "module", "proj4/common"], function (t, s) {
    var i = t("proj4/common");
    s.init = function () {
      this.sphere || (this.e0 = i.e0fn(this.es), this.e1 = i.e1fn(this.es), this.e2 = i.e2fn(this.es), this.e3 = i.e3fn(this.es), this.ml0 = this.a * i.mlfn(this.e0, this.e1, this.e2, this.e3, this.lat0))
    }, s.forward = function (t) {
      var s, a, h = t.x,
        e = t.y;
      if (h = i.adjust_lon(h - this.long0), this.sphere) s = this.a * Math.asin(Math.cos(e) * Math.sin(h)), a = this.a * (Math.atan2(Math.tan(e), Math.cos(h)) - this.lat0);
      else {
        var n = Math.sin(e),
          r = Math.cos(e),
          o = i.gN(this.a, this.e, n),
          l = Math.tan(e) * Math.tan(e),
          u = h * Math.cos(e),
          p = u * u,
          c = this.es * r * r / (1 - this.es),
          m = this.a * i.mlfn(this.e0, this.e1, this.e2, this.e3, e);
        s = o * u * (1 - p * l * (1 / 6 - (8 - l + 8 * c) * p / 120)), a = m - this.ml0 + o * n / r * p * (.5 + (5 - l + 6 * c) * p / 24)
      }
      return t.x = s + this.x0, t.y = a + this.y0, t
    }, s.inverse = function (t) {
      t.x -= this.x0, t.y -= this.y0;
      var s, a, h = t.x / this.a,
        e = t.y / this.a;
      if (this.sphere) {
        var n = e + this.lat0;
        s = Math.asin(Math.sin(n) * Math.cos(h)), a = Math.atan2(Math.tan(h), Math.cos(n))
      } else {
        var r = this.ml0 / this.a + e,
          o = i.imlfn(r, this.e0, this.e1, this.e2, this.e3);
        if (Math.abs(Math.abs(o) - i.HALF_PI) <= i.EPSLN) return t.x = this.long0, t.y = i.HALF_PI, 0 > e && (t.y *= -1), t;
        var l = i.gN(this.a, this.e, Math.sin(o)),
          u = l * l * l / this.a / this.a * (1 - this.es),
          p = Math.pow(Math.tan(o), 2),
          c = h * this.a / l,
          m = c * c;
        s = o - l * Math.tan(o) / u * c * c * (.5 - (1 + 3 * p) * c * c / 24), a = c * (1 - m * (p / 3 + (1 + 3 * p) * p * m / 15)) / Math.cos(o)
      }
      return t.x = i.adjust_lon(a + this.long0), t.y = i.adjust_lat(s), t
    }, s.names = ["Cassini", "Cassini_Soldner", "cass"]
  }), i("proj4/projCode/laea", ["require", "exports", "module", "proj4/common"], function (t, s) {
    var i = t("proj4/common");
    s.S_POLE = 1, s.N_POLE = 2, s.EQUIT = 3, s.OBLIQ = 4, s.init = function () {
      var t = Math.abs(this.lat0);
      if (this.mode = Math.abs(t - i.HALF_PI) < i.EPSLN ? this.lat0 < 0 ? this.S_POLE : this.N_POLE : Math.abs(t) < i.EPSLN ? this.EQUIT : this.OBLIQ, this.es > 0) {
        var s;
        switch (this.qp = i.qsfnz(this.e, 1), this.mmf = .5 / (1 - this.es), this.apa = this.authset(this.es), this.mode) {
        case this.N_POLE:
          this.dd = 1;
          break;
        case this.S_POLE:
          this.dd = 1;
          break;
        case this.EQUIT:
          this.rq = Math.sqrt(.5 * this.qp), this.dd = 1 / this.rq, this.xmf = 1, this.ymf = .5 * this.qp;
          break;
        case this.OBLIQ:
          this.rq = Math.sqrt(.5 * this.qp), s = Math.sin(this.lat0), this.sinb1 = i.qsfnz(this.e, s) / this.qp, this.cosb1 = Math.sqrt(1 - this.sinb1 * this.sinb1), this.dd = Math.cos(this.lat0) / (Math.sqrt(1 - this.es * s * s) * this.rq * this.cosb1), this.ymf = (this.xmf = this.rq) / this.dd, this.xmf *= this.dd
        }
      } else this.mode === this.OBLIQ && (this.sinph0 = Math.sin(this.lat0), this.cosph0 = Math.cos(this.lat0))
    }, s.forward = function (t) {
      var s, a, h, e, n, r, o, l, u, p, c = t.x,
        m = t.y;
      if (c = i.adjust_lon(c - this.long0), this.sphere) {
        if (n = Math.sin(m), p = Math.cos(m), h = Math.cos(c), this.mode === this.OBLIQ || this.mode === this.EQUIT) {
          if (a = this.mode === this.EQUIT ? 1 + p * h : 1 + this.sinph0 * n + this.cosph0 * p * h, a <= i.EPSLN) return null;
          a = Math.sqrt(2 / a), s = a * p * Math.sin(c), a *= this.mode === this.EQUIT ? n : this.cosph0 * n - this.sinph0 * p * h
        } else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
          if (this.mode === this.N_POLE && (h = -h), Math.abs(m + this.phi0) < i.EPSLN) return null;
          a = i.FORTPI - .5 * m, a = 2 * (this.mode === this.S_POLE ? Math.cos(a) : Math.sin(a)), s = a * Math.sin(c), a *= h
        }
      } else {
        switch (o = 0, l = 0, u = 0, h = Math.cos(c), e = Math.sin(c), n = Math.sin(m), r = i.qsfnz(this.e, n), (this.mode === this.OBLIQ || this.mode === this.EQUIT) && (o = r / this.qp, l = Math.sqrt(1 - o * o)), this.mode) {
        case this.OBLIQ:
          u = 1 + this.sinb1 * o + this.cosb1 * l * h;
          break;
        case this.EQUIT:
          u = 1 + l * h;
          break;
        case this.N_POLE:
          u = i.HALF_PI + m, r = this.qp - r;
          break;
        case this.S_POLE:
          u = m - i.HALF_PI, r = this.qp + r
        }
        if (Math.abs(u) < i.EPSLN) return null;
        switch (this.mode) {
        case this.OBLIQ:
        case this.EQUIT:
          u = Math.sqrt(2 / u), a = this.mode === this.OBLIQ ? this.ymf * u * (this.cosb1 * o - this.sinb1 * l * h) : (u = Math.sqrt(2 / (1 + l * h))) * o * this.ymf, s = this.xmf * u * l * e;
          break;
        case this.N_POLE:
        case this.S_POLE:
          r >= 0 ? (s = (u = Math.sqrt(r)) * e, a = h * (this.mode === this.S_POLE ? u : -u)) : s = a = 0
        }
      }
      return t.x = this.a * s + this.x0, t.y = this.a * a + this.y0, t
    }, s.inverse = function (t) {
      t.x -= this.x0, t.y -= this.y0;
      var s, a, h, e, n, r, o, l = t.x / this.a,
        u = t.y / this.a;
      if (this.sphere) {
        var p, c = 0,
          m = 0;
        if (p = Math.sqrt(l * l + u * u), a = .5 * p, a > 1) return null;
        switch (a = 2 * Math.asin(a), (this.mode === this.OBLIQ || this.mode === this.EQUIT) && (m = Math.sin(a), c = Math.cos(a)), this.mode) {
        case this.EQUIT:
          a = Math.abs(p) <= i.EPSLN ? 0 : Math.asin(u * m / p), l *= m, u = c * p;
          break;
        case this.OBLIQ:
          a = Math.abs(p) <= i.EPSLN ? this.phi0 : Math.asin(c * this.sinph0 + u * m * this.cosph0 / p), l *= m * this.cosph0, u = (c - Math.sin(a) * this.sinph0) * p;
          break;
        case this.N_POLE:
          u = -u, a = i.HALF_PI - a;
          break;
        case this.S_POLE:
          a -= i.HALF_PI
        }
        s = 0 !== u || this.mode !== this.EQUIT && this.mode !== this.OBLIQ ? Math.atan2(l, u) : 0
      } else {
        if (o = 0, this.mode === this.OBLIQ || this.mode === this.EQUIT) {
          if (l /= this.dd, u *= this.dd, r = Math.sqrt(l * l + u * u), r < i.EPSLN) return t.x = 0, t.y = this.phi0, t;
          e = 2 * Math.asin(.5 * r / this.rq), h = Math.cos(e), l *= e = Math.sin(e), this.mode === this.OBLIQ ? (o = h * this.sinb1 + u * e * this.cosb1 / r, n = this.qp * o, u = r * this.cosb1 * h - u * this.sinb1 * e) : (o = u * e / r, n = this.qp * o, u = r * h)
        } else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
          if (this.mode === this.N_POLE && (u = -u), n = l * l + u * u, !n) return t.x = 0, t.y = this.phi0, t;
          o = 1 - n / this.qp, this.mode === this.S_POLE && (o = -o)
        }
        s = Math.atan2(l, u), a = this.authlat(Math.asin(o), this.apa)
      }
      return t.x = i.adjust_lon(this.long0 + s), t.y = a, t
    }, s.P00 = .3333333333333333, s.P01 = .17222222222222222, s.P02 = .10257936507936508, s.P10 = .06388888888888888, s.P11 = .0664021164021164, s.P20 = .016415012942191543, s.authset = function (t) {
      var s, i = [];
      return i[0] = t * this.P00, s = t * t, i[0] += s * this.P01, i[1] = s * this.P10, s *= t, i[0] += s * this.P02, i[1] += s * this.P11, i[2] = s * this.P20, i
    }, s.authlat = function (t, s) {
      var i = t + t;
      return t + s[0] * Math.sin(i) + s[1] * Math.sin(i + i) + s[2] * Math.sin(i + i + i)
    }, s.names = ["Lambert Azimuthal Equal Area", "Lambert_Azimuthal_Equal_Area", "laea"]
  }), i("proj4/projCode/merc", ["require", "exports", "module", "proj4/common"], function (t, s) {
    var i = t("proj4/common");
    s.init = function () {
      var t = this.b / this.a;
      this.es = 1 - t * t, this.e = Math.sqrt(this.es), this.lat_ts ? this.k0 = this.sphere ? Math.cos(this.lat_ts) : i.msfnz(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) : this.k0 || (this.k0 = this.k ? this.k : 1)
    }, s.forward = function (t) {
      var s = t.x,
        a = t.y;
      if (a * i.R2D > 90 && a * i.R2D < -90 && s * i.R2D > 180 && s * i.R2D < -180) return null;
      var h, e;
      if (Math.abs(Math.abs(a) - i.HALF_PI) <= i.EPSLN) return null;
      if (this.sphere) h = this.x0 + this.a * this.k0 * i.adjust_lon(s - this.long0), e = this.y0 + this.a * this.k0 * Math.log(Math.tan(i.FORTPI + .5 * a));
      else {
        var n = Math.sin(a),
          r = i.tsfnz(this.e, a, n);
        h = this.x0 + this.a * this.k0 * i.adjust_lon(s - this.long0), e = this.y0 - this.a * this.k0 * Math.log(r)
      }
      return t.x = h, t.y = e, t
    }, s.inverse = function (t) {
      var s, a, h = t.x - this.x0,
        e = t.y - this.y0;
      if (this.sphere) a = i.HALF_PI - 2 * Math.atan(Math.exp(-e / (this.a * this.k0)));
      else {
        var n = Math.exp(-e / (this.a * this.k0));
        if (a = i.phi2z(this.e, n), -9999 === a) return null
      }
      return s = i.adjust_lon(this.long0 + h / (this.a * this.k0)), t.x = s, t.y = a, t
    }, s.names = ["Mercator", "Popular Visualisation Pseudo Mercator", "Mercator_1SP", "Mercator_Auxiliary_Sphere", "merc"]
  }), i("proj4/projCode/aea", ["require", "exports", "module", "proj4/common"], function (t, s) {
    var i = t("proj4/common");
    s.init = function () {
      Math.abs(this.lat1 + this.lat2) < i.EPSLN || (this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e3 = Math.sqrt(this.es), this.sin_po = Math.sin(this.lat1), this.cos_po = Math.cos(this.lat1), this.t1 = this.sin_po, this.con = this.sin_po, this.ms1 = i.msfnz(this.e3, this.sin_po, this.cos_po), this.qs1 = i.qsfnz(this.e3, this.sin_po, this.cos_po), this.sin_po = Math.sin(this.lat2), this.cos_po = Math.cos(this.lat2), this.t2 = this.sin_po, this.ms2 = i.msfnz(this.e3, this.sin_po, this.cos_po), this.qs2 = i.qsfnz(this.e3, this.sin_po, this.cos_po), this.sin_po = Math.sin(this.lat0), this.cos_po = Math.cos(this.lat0), this.t3 = this.sin_po, this.qs0 = i.qsfnz(this.e3, this.sin_po, this.cos_po), this.ns0 = Math.abs(this.lat1 - this.lat2) > i.EPSLN ? (this.ms1 * this.ms1 - this.ms2 * this.ms2) / (this.qs2 - this.qs1) : this.con, this.c = this.ms1 * this.ms1 + this.ns0 * this.qs1, this.rh = this.a * Math.sqrt(this.c - this.ns0 * this.qs0) / this.ns0)
    }, s.forward = function (t) {
      var s = t.x,
        a = t.y;
      this.sin_phi = Math.sin(a), this.cos_phi = Math.cos(a);
      var h = i.qsfnz(this.e3, this.sin_phi, this.cos_phi),
        e = this.a * Math.sqrt(this.c - this.ns0 * h) / this.ns0,
        n = this.ns0 * i.adjust_lon(s - this.long0),
        r = e * Math.sin(n) + this.x0,
        o = this.rh - e * Math.cos(n) + this.y0;
      return t.x = r, t.y = o, t
    }, s.inverse = function (t) {
      var s, a, h, e, n, r;
      return t.x -= this.x0, t.y = this.rh - t.y + this.y0, this.ns0 >= 0 ? (s = Math.sqrt(t.x * t.x + t.y * t.y), h = 1) : (s = -Math.sqrt(t.x * t.x + t.y * t.y), h = -1), e = 0, 0 !== s && (e = Math.atan2(h * t.x, h * t.y)), h = s * this.ns0 / this.a, this.sphere ? r = Math.asin((this.c - h * h) / (2 * this.ns0)) : (a = (this.c - h * h) / this.ns0, r = this.phi1z(this.e3, a)), n = i.adjust_lon(e / this.ns0 + this.long0), t.x = n, t.y = r, t
    }, s.phi1z = function (t, s) {
      var a, h, e, n, r, o = i.asinz(.5 * s);
      if (t < i.EPSLN) return o;
      for (var l = t * t, u = 1; 25 >= u; u++)
        if (a = Math.sin(o), h = Math.cos(o), e = t * a, n = 1 - e * e, r = .5 * n * n / h * (s / (1 - l) - a / n + .5 / t * Math.log((1 - e) / (1 + e))), o += r, Math.abs(r) <= 1e-7) return o;
      return null
    }, s.names = ["Albers_Conic_Equal_Area", "Albers", "aea"]
  }), i("proj4/projCode/gnom", ["require", "exports", "module", "proj4/common"], function (t, s) {
    var i = t("proj4/common");
    s.init = function () {
      this.sin_p14 = Math.sin(this.lat0), this.cos_p14 = Math.cos(this.lat0), this.infinity_dist = 1e3 * this.a, this.rc = 1
    }, s.forward = function (t) {
      var s, a, h, e, n, r, o, l, u = t.x,
        p = t.y;
      return h = i.adjust_lon(u - this.long0), s = Math.sin(p), a = Math.cos(p), e = Math.cos(h), r = this.sin_p14 * s + this.cos_p14 * a * e, n = 1, r > 0 || Math.abs(r) <= i.EPSLN ? (o = this.x0 + this.a * n * a * Math.sin(h) / r, l = this.y0 + this.a * n * (this.cos_p14 * s - this.sin_p14 * a * e) / r) : (o = this.x0 + this.infinity_dist * a * Math.sin(h), l = this.y0 + this.infinity_dist * (this.cos_p14 * s - this.sin_p14 * a * e)), t.x = o, t.y = l, t
    }, s.inverse = function (t) {
      var s, a, h, e, n, r;
      return t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a, t.x /= this.k0, t.y /= this.k0, (s = Math.sqrt(t.x * t.x + t.y * t.y)) ? (e = Math.atan2(s, this.rc), a = Math.sin(e), h = Math.cos(e), r = i.asinz(h * this.sin_p14 + t.y * a * this.cos_p14 / s), n = Math.atan2(t.x * a, s * this.cos_p14 * h - t.y * this.sin_p14 * a), n = i.adjust_lon(this.long0 + n)) : (r = this.phic0, n = 0), t.x = n, t.y = r, t
    }, s.names = ["gnom"]
  }), i("proj4/projCode/cea", ["require", "exports", "module", "proj4/common"], function (t, s) {
    var i = t("proj4/common");
    s.init = function () {
      this.sphere || (this.k0 = i.msfnz(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)))
    }, s.forward = function (t) {
      var s, a, h = t.x,
        e = t.y,
        n = i.adjust_lon(h - this.long0);
      if (this.sphere) s = this.x0 + this.a * n * Math.cos(this.lat_ts), a = this.y0 + this.a * Math.sin(e) / Math.cos(this.lat_ts);
      else {
        var r = i.qsfnz(this.e, Math.sin(e));
        s = this.x0 + this.a * this.k0 * n, a = this.y0 + .5 * this.a * r / this.k0
      }
      return t.x = s, t.y = a, t
    }, s.inverse = function (t) {
      t.x -= this.x0, t.y -= this.y0;
      var s, a;
      return this.sphere ? (s = i.adjust_lon(this.long0 + t.x / this.a / Math.cos(this.lat_ts)), a = Math.asin(t.y / this.a * Math.cos(this.lat_ts))) : (a = i.iqsfnz(this.e, 2 * t.y * this.k0 / this.a), s = i.adjust_lon(this.long0 + t.x / (this.a * this.k0))), t.x = s, t.y = a, t
    }, s.names = ["cea"]
  }), i("proj4/projCode/eqc", ["require", "exports", "module", "proj4/common"], function (t, s) {
    var i = t("proj4/common");
    s.init = function () {
      this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.lat_ts = this.lat_t || 0, this.title = this.title || "Equidistant Cylindrical (Plate Carre)", this.rc = Math.cos(this.lat_ts)
    }, s.forward = function (t) {
      var s = t.x,
        a = t.y,
        h = i.adjust_lon(s - this.long0),
        e = i.adjust_lat(a - this.lat0);
      return t.x = this.x0 + this.a * h * this.rc, t.y = this.y0 + this.a * e, t
    }, s.inverse = function (t) {
      var s = t.x,
        a = t.y;
      return t.x = i.adjust_lon(this.long0 + (s - this.x0) / (this.a * this.rc)), t.y = i.adjust_lat(this.lat0 + (a - this.y0) / this.a), t
    }, s.names = ["Equirectangular", "Equidistant_Cylindrical", "eqc"]
  }), i("proj4/projCode/poly", ["require", "exports", "module", "proj4/common"], function (t, s) {
    var i = t("proj4/common");
    s.init = function () {
      this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e = Math.sqrt(this.es), this.e0 = i.e0fn(this.es), this.e1 = i.e1fn(this.es), this.e2 = i.e2fn(this.es), this.e3 = i.e3fn(this.es), this.ml0 = this.a * i.mlfn(this.e0, this.e1, this.e2, this.e3, this.lat0)
    }, s.forward = function (t) {
      var s, a, h, e = t.x,
        n = t.y,
        r = i.adjust_lon(e - this.long0);
      if (h = r * Math.sin(n), this.sphere) Math.abs(n) <= i.EPSLN ? (s = this.a * r, a = -1 * this.a * this.lat0) : (s = this.a * Math.sin(h) / Math.tan(n), a = this.a * (i.adjust_lat(n - this.lat0) + (1 - Math.cos(h)) / Math.tan(n)));
      else if (Math.abs(n) <= i.EPSLN) s = this.a * r, a = -1 * this.ml0;
      else {
        var o = i.gN(this.a, this.e, Math.sin(n)) / Math.tan(n);
        s = o * Math.sin(h), a = this.a * i.mlfn(this.e0, this.e1, this.e2, this.e3, n) - this.ml0 + o * (1 - Math.cos(h))
      }
      return t.x = s + this.x0, t.y = a + this.y0, t
    }, s.inverse = function (t) {
      var s, a, h, e, n, r, o, l, u;
      if (h = t.x - this.x0, e = t.y - this.y0, this.sphere)
        if (Math.abs(e + this.a * this.lat0) <= i.EPSLN) s = i.adjust_lon(h / this.a + this.long0), a = 0;
        else {
          r = this.lat0 + e / this.a, o = h * h / this.a / this.a + r * r, l = r;
          var p;
          for (n = i.MAX_ITER; n; --n)
            if (p = Math.tan(l), u = -1 * (r * (l * p + 1) - l - .5 * (l * l + o) * p) / ((l - r) / p - 1), l += u, Math.abs(u) <= i.EPSLN) {
              a = l;
              break
            }
          s = i.adjust_lon(this.long0 + Math.asin(h * Math.tan(l) / this.a) / Math.sin(a))
        } else if (Math.abs(e + this.ml0) <= i.EPSLN) a = 0, s = i.adjust_lon(this.long0 + h / this.a);
      else {
        r = (this.ml0 + e) / this.a, o = h * h / this.a / this.a + r * r, l = r;
        var c, m, M, f, d;
        for (n = i.MAX_ITER; n; --n)
          if (d = this.e * Math.sin(l), c = Math.sqrt(1 - d * d) * Math.tan(l), m = this.a * i.mlfn(this.e0, this.e1, this.e2, this.e3, l), M = this.e0 - 2 * this.e1 * Math.cos(2 * l) + 4 * this.e2 * Math.cos(4 * l) - 6 * this.e3 * Math.cos(6 * l), f = m / this.a, u = (r * (c * f + 1) - f - .5 * c * (f * f + o)) / (this.es * Math.sin(2 * l) * (f * f + o - 2 * r * f) / (4 * c) + (r - f) * (c * M - 2 / Math.sin(2 * l)) - M), l -= u, Math.abs(u) <= i.EPSLN) {
            a = l;
            break
          }
        c = Math.sqrt(1 - this.es * Math.pow(Math.sin(a), 2)) * Math.tan(a), s = i.adjust_lon(this.long0 + Math.asin(h * c / this.a) / Math.sin(a))
      }
      return t.x = s, t.y = a, t
    }, s.names = ["Polyconic", "poly"]
  }), i("proj4/projCode/nzmg", ["require", "exports", "module", "proj4/common"], function (t, s) {
    var i = t("proj4/common");
    s.iterations = 1, s.init = function () {
      this.A = [], this.A[1] = .6399175073, this.A[2] = -.1358797613, this.A[3] = .063294409, this.A[4] = -.02526853, this.A[5] = .0117879, this.A[6] = -.0055161, this.A[7] = .0026906, this.A[8] = -.001333, this.A[9] = 67e-5, this.A[10] = -34e-5, this.B_re = [], this.B_im = [], this.B_re[1] = .7557853228, this.B_im[1] = 0, this.B_re[2] = .249204646, this.B_im[2] = .003371507, this.B_re[3] = -.001541739, this.B_im[3] = .04105856, this.B_re[4] = -.10162907, this.B_im[4] = .01727609, this.B_re[5] = -.26623489, this.B_im[5] = -.36249218, this.B_re[6] = -.6870983, this.B_im[6] = -1.1651967, this.C_re = [], this.C_im = [], this.C_re[1] = 1.3231270439, this.C_im[1] = 0, this.C_re[2] = -.577245789, this.C_im[2] = -.007809598, this.C_re[3] = .508307513, this.C_im[3] = -.112208952, this.C_re[4] = -.15094762, this.C_im[4] = .18200602, this.C_re[5] = 1.01418179, this.C_im[5] = 1.64497696, this.C_re[6] = 1.9660549, this.C_im[6] = 2.5127645, this.D = [], this.D[1] = 1.5627014243, this.D[2] = .5185406398, this.D[3] = -.03333098, this.D[4] = -.1052906, this.D[5] = -.0368594, this.D[6] = .007317, this.D[7] = .0122, this.D[8] = .00394, this.D[9] = -.0013
    }, s.forward = function (t) {
      var s, a = t.x,
        h = t.y,
        e = h - this.lat0,
        n = a - this.long0,
        r = 1e-5 * (e / i.SEC_TO_RAD),
        o = n,
        l = 1,
        u = 0;
      for (s = 1; 10 >= s; s++) l *= r, u += this.A[s] * l;
      var p, c, m = u,
        M = o,
        f = 1,
        d = 0,
        _ = 0,
        y = 0;
      for (s = 1; 6 >= s; s++) p = f * m - d * M, c = d * m + f * M, f = p, d = c, _ = _ + this.B_re[s] * f - this.B_im[s] * d, y = y + this.B_im[s] * f + this.B_re[s] * d;
      return t.x = y * this.a + this.x0, t.y = _ * this.a + this.y0, t
    }, s.inverse = function (t) {
      var s, a, h, e = t.x,
        n = t.y,
        r = e - this.x0,
        o = n - this.y0,
        l = o / this.a,
        u = r / this.a,
        p = 1,
        c = 0,
        m = 0,
        M = 0;
      for (s = 1; 6 >= s; s++) a = p * l - c * u, h = c * l + p * u, p = a, c = h, m = m + this.C_re[s] * p - this.C_im[s] * c, M = M + this.C_im[s] * p + this.C_re[s] * c;
      for (var f = 0; f < this.iterations; f++) {
        var d, _, y = m,
          j = M,
          x = l,
          g = u;
        for (s = 2; 6 >= s; s++) d = y * m - j * M, _ = j * m + y * M, y = d, j = _, x += (s - 1) * (this.B_re[s] * y - this.B_im[s] * j), g += (s - 1) * (this.B_im[s] * y + this.B_re[s] * j);
        y = 1, j = 0;
        var v = this.B_re[1],
          P = this.B_im[1];
        for (s = 2; 6 >= s; s++) d = y * m - j * M, _ = j * m + y * M, y = d, j = _, v += s * (this.B_re[s] * y - this.B_im[s] * j), P += s * (this.B_im[s] * y + this.B_re[s] * j);
        var b = v * v + P * P;
        m = (x * v + g * P) / b, M = (g * v - x * P) / b
      }
      var C = m,
        S = M,
        N = 1,
        I = 0;
      for (s = 1; 9 >= s; s++) N *= C, I += this.D[s] * N;
      var A = this.lat0 + 1e5 * I * i.SEC_TO_RAD,
        E = this.long0 + S;
      return t.x = E, t.y = A, t
    }, s.names = ["New_Zealand_Map_Grid", "nzmg"]
  }), i("proj4/projCode/mill", ["require", "exports", "module", "proj4/common"], function (t, s) {
    var i = t("proj4/common");
    s.init = function () {}, s.forward = function (t) {
      var s = t.x,
        a = t.y,
        h = i.adjust_lon(s - this.long0),
        e = this.x0 + this.a * h,
        n = this.y0 + 1.25 * this.a * Math.log(Math.tan(i.PI / 4 + a / 2.5));
      return t.x = e, t.y = n, t
    }, s.inverse = function (t) {
      t.x -= this.x0, t.y -= this.y0;
      var s = i.adjust_lon(this.long0 + t.x / this.a),
        a = 2.5 * (Math.atan(Math.exp(.8 * t.y / this.a)) - i.PI / 4);
      return t.x = s, t.y = a, t
    }, s.names = ["Miller_Cylindrical", "mill"]
  }), i("proj4/projCode/sinu", ["require", "exports", "module", "proj4/common"], function (t, s) {
    var i = t("proj4/common");
    s.init = function () {
      this.sphere ? (this.n = 1, this.m = 0, this.es = 0, this.C_y = Math.sqrt((this.m + 1) / this.n), this.C_x = this.C_y / (this.m + 1)) : this.en = i.pj_enfn(this.es)
    }, s.forward = function (t) {
      var s, a, h = t.x,
        e = t.y;
      if (h = i.adjust_lon(h - this.long0), this.sphere) {
        if (this.m)
          for (var n = this.n * Math.sin(e), r = i.MAX_ITER; r; --r) {
            var o = (this.m * e + Math.sin(e) - n) / (this.m + Math.cos(e));
            if (e -= o, Math.abs(o) < i.EPSLN) break
          } else e = 1 !== this.n ? Math.asin(this.n * Math.sin(e)) : e;
        s = this.a * this.C_x * h * (this.m + Math.cos(e)), a = this.a * this.C_y * e
      } else {
        var l = Math.sin(e),
          u = Math.cos(e);
        a = this.a * i.pj_mlfn(e, l, u, this.en), s = this.a * h * u / Math.sqrt(1 - this.es * l * l)
      }
      return t.x = s, t.y = a, t
    }, s.inverse = function (t) {
      var s, a, h, e;
      return t.x -= this.x0, h = t.x / this.a, t.y -= this.y0, s = t.y / this.a, this.sphere ? (s /= this.C_y, h /= this.C_x * (this.m + Math.cos(s)), this.m ? s = i.asinz((this.m * s + Math.sin(s)) / this.n) : 1 !== this.n && (s = i.asinz(Math.sin(s) / this.n)), h = i.adjust_lon(h + this.long0), s = i.adjust_lat(s)) : (s = i.pj_inv_mlfn(t.y / this.a, this.es, this.en), e = Math.abs(s), e < i.HALF_PI ? (e = Math.sin(s), a = this.long0 + t.x * Math.sqrt(1 - this.es * e * e) / (this.a * Math.cos(s)), h = i.adjust_lon(a)) : e - i.EPSLN < i.HALF_PI && (h = this.long0)), t.x = h, t.y = s, t
    }, s.names = ["Sinusoidal", "sinu"]
  }), i("proj4/projCode/moll", ["require", "exports", "module", "proj4/common"], function (t, s) {
    var i = t("proj4/common");
    s.init = function () {}, s.forward = function (t) {
      for (var s = t.x, a = t.y, h = i.adjust_lon(s - this.long0), e = a, n = i.PI * Math.sin(a), r = 0; !0; r++) {
        var o = -(e + Math.sin(e) - n) / (1 + Math.cos(e));
        if (e += o, Math.abs(o) < i.EPSLN) break
      }
      e /= 2, i.PI / 2 - Math.abs(a) < i.EPSLN && (h = 0);
      var l = .900316316158 * this.a * h * Math.cos(e) + this.x0,
        u = 1.4142135623731 * this.a * Math.sin(e) + this.y0;
      return t.x = l, t.y = u, t
    }, s.inverse = function (t) {
      var s, a;
      t.x -= this.x0, t.y -= this.y0, a = t.y / (1.4142135623731 * this.a), Math.abs(a) > .999999999999 && (a = .999999999999), s = Math.asin(a);
      var h = i.adjust_lon(this.long0 + t.x / (.900316316158 * this.a * Math.cos(s)));
      h < -i.PI && (h = -i.PI), h > i.PI && (h = i.PI), a = (2 * s + Math.sin(2 * s)) / i.PI, Math.abs(a) > 1 && (a = 1);
      var e = Math.asin(a);
      return t.x = h, t.y = e, t
    }, s.names = ["Mollweide", "moll"]
  }), i("proj4/projCode/eqdc", ["require", "exports", "module", "proj4/common"], function (t, s) {
    var i = t("proj4/common");
    s.init = function () {
      return Math.abs(this.lat1 + this.lat2) < i.EPSLN ? (i.reportError("eqdc:init: Equal Latitudes"), void 0) : (this.lat2 = this.lat2 || this.lat1, this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e = Math.sqrt(this.es), this.e0 = i.e0fn(this.es), this.e1 = i.e1fn(this.es), this.e2 = i.e2fn(this.es), this.e3 = i.e3fn(this.es), this.sinphi = Math.sin(this.lat1), this.cosphi = Math.cos(this.lat1), this.ms1 = i.msfnz(this.e, this.sinphi, this.cosphi), this.ml1 = i.mlfn(this.e0, this.e1, this.e2, this.e3, this.lat1), Math.abs(this.lat1 - this.lat2) < i.EPSLN ? this.ns = this.sinphi : (this.sinphi = Math.sin(this.lat2), this.cosphi = Math.cos(this.lat2), this.ms2 = i.msfnz(this.e, this.sinphi, this.cosphi), this.ml2 = i.mlfn(this.e0, this.e1, this.e2, this.e3, this.lat2), this.ns = (this.ms1 - this.ms2) / (this.ml2 - this.ml1)), this.g = this.ml1 + this.ms1 / this.ns, this.ml0 = i.mlfn(this.e0, this.e1, this.e2, this.e3, this.lat0), this.rh = this.a * (this.g - this.ml0), void 0)
    }, s.forward = function (t) {
      var s, a = t.x,
        h = t.y;
      if (this.sphere) s = this.a * (this.g - h);
      else {
        var e = i.mlfn(this.e0, this.e1, this.e2, this.e3, h);
        s = this.a * (this.g - e)
      }
      var n = this.ns * i.adjust_lon(a - this.long0),
        r = this.x0 + s * Math.sin(n),
        o = this.y0 + this.rh - s * Math.cos(n);
      return t.x = r, t.y = o, t
    }, s.inverse = function (t) {
      t.x -= this.x0, t.y = this.rh - t.y + this.y0;
      var s, a, h, e;
      this.ns >= 0 ? (a = Math.sqrt(t.x * t.x + t.y * t.y), s = 1) : (a = -Math.sqrt(t.x * t.x + t.y * t.y), s = -1);
      var n = 0;
      if (0 !== a && (n = Math.atan2(s * t.x, s * t.y)), this.sphere) return e = i.adjust_lon(this.long0 + n / this.ns), h = i.adjust_lat(this.g - a / this.a), t.x = e, t.y = h, t;
      var r = this.g - a / this.a;
      return h = i.imlfn(r, this.e0, this.e1, this.e2, this.e3), e = i.adjust_lon(this.long0 + n / this.ns), t.x = e, t.y = h, t
    }, s.names = ["Equidistant_Conic", "eqdc"]
  }), i("proj4/projCode/vandg", ["require", "exports", "module", "proj4/common"], function (t, s) {
    var i = t("proj4/common");
    s.init = function () {
      this.R = this.a
    }, s.forward = function (t) {
      var s, a, h = t.x,
        e = t.y,
        n = i.adjust_lon(h - this.long0);
      Math.abs(e) <= i.EPSLN && (s = this.x0 + this.R * n, a = this.y0);
      var r = i.asinz(2 * Math.abs(e / i.PI));
      (Math.abs(n) <= i.EPSLN || Math.abs(Math.abs(e) - i.HALF_PI) <= i.EPSLN) && (s = this.x0, a = e >= 0 ? this.y0 + i.PI * this.R * Math.tan(.5 * r) : this.y0 + i.PI * this.R * -Math.tan(.5 * r));
      var o = .5 * Math.abs(i.PI / n - n / i.PI),
        l = o * o,
        u = Math.sin(r),
        p = Math.cos(r),
        c = p / (u + p - 1),
        m = c * c,
        M = c * (2 / u - 1),
        f = M * M,
        d = i.PI * this.R * (o * (c - f) + Math.sqrt(l * (c - f) * (c - f) - (f + l) * (m - f))) / (f + l);
      0 > n && (d = -d), s = this.x0 + d;
      var _ = l + c;
      return d = i.PI * this.R * (M * _ - o * Math.sqrt((f + l) * (l + 1) - _ * _)) / (f + l), a = e >= 0 ? this.y0 + d : this.y0 - d, t.x = s, t.y = a, t
    }, s.inverse = function (t) {
      var s, a, h, e, n, r, o, l, u, p, c, m, M;
      return t.x -= this.x0, t.y -= this.y0, c = i.PI * this.R, h = t.x / c, e = t.y / c, n = h * h + e * e, r = -Math.abs(e) * (1 + n), o = r - 2 * e * e + h * h, l = -2 * r + 1 + 2 * e * e + n * n, M = e * e / l + (2 * o * o * o / l / l / l - 9 * r * o / l / l) / 27, u = (r - o * o / 3 / l) / l, p = 2 * Math.sqrt(-u / 3), c = 3 * M / u / p, Math.abs(c) > 1 && (c = c >= 0 ? 1 : -1), m = Math.acos(c) / 3, a = t.y >= 0 ? (-p * Math.cos(m + i.PI / 3) - o / 3 / l) * i.PI : -(-p * Math.cos(m + i.PI / 3) - o / 3 / l) * i.PI, s = Math.abs(h) < i.EPSLN ? this.long0 : i.adjust_lon(this.long0 + i.PI * (n - 1 + Math.sqrt(1 + 2 * (h * h - e * e) + n * n)) / 2 / h), t.x = s, t.y = a, t
    }, s.names = ["Van_der_Grinten_I", "VanDerGrinten", "vandg"]
  }), i("proj4/projCode/aeqd", ["require", "exports", "module", "proj4/common"], function (t, s) {
    var i = t("proj4/common");
    s.init = function () {
      this.sin_p12 = Math.sin(this.lat0), this.cos_p12 = Math.cos(this.lat0)
    }, s.forward = function (t) {
      var s, a, h, e, n, r, o, l, u, p, c, m, M, f, d, _, y, j, x, g, v, P, b, C = t.x,
        S = t.y,
        N = Math.sin(t.y),
        I = Math.cos(t.y),
        A = i.adjust_lon(C - this.long0);
      return this.sphere ? Math.abs(this.sin_p12 - 1) <= i.EPSLN ? (t.x = this.x0 + this.a * (i.HALF_PI - S) * Math.sin(A), t.y = this.y0 - this.a * (i.HALF_PI - S) * Math.cos(A), t) : Math.abs(this.sin_p12 + 1) <= i.EPSLN ? (t.x = this.x0 + this.a * (i.HALF_PI + S) * Math.sin(A), t.y = this.y0 + this.a * (i.HALF_PI + S) * Math.cos(A), t) : (j = this.sin_p12 * N + this.cos_p12 * I * Math.cos(A), _ = Math.acos(j), y = _ / Math.sin(_), t.x = this.x0 + this.a * y * I * Math.sin(A), t.y = this.y0 + this.a * y * (this.cos_p12 * N - this.sin_p12 * I * Math.cos(A)), t) : (s = i.e0fn(this.es), a = i.e1fn(this.es), h = i.e2fn(this.es), e = i.e3fn(this.es), Math.abs(this.sin_p12 - 1) <= i.EPSLN ? (n = this.a * i.mlfn(s, a, h, e, i.HALF_PI), r = this.a * i.mlfn(s, a, h, e, S), t.x = this.x0 + (n - r) * Math.sin(A), t.y = this.y0 - (n - r) * Math.cos(A), t) : Math.abs(this.sin_p12 + 1) <= i.EPSLN ? (n = this.a * i.mlfn(s, a, h, e, i.HALF_PI), r = this.a * i.mlfn(s, a, h, e, S), t.x = this.x0 + (n + r) * Math.sin(A), t.y = this.y0 + (n + r) * Math.cos(A), t) : (o = N / I, l = i.gN(this.a, this.e, this.sin_p12), u = i.gN(this.a, this.e, N), p = Math.atan((1 - this.es) * o + this.es * l * this.sin_p12 / (u * I)), c = Math.atan2(Math.sin(A), this.cos_p12 * Math.tan(p) - this.sin_p12 * Math.cos(A)), x = 0 === c ? Math.asin(this.cos_p12 * Math.sin(p) - this.sin_p12 * Math.cos(p)) : Math.abs(Math.abs(c) - i.PI) <= i.EPSLN ? -Math.asin(this.cos_p12 * Math.sin(p) - this.sin_p12 * Math.cos(p)) : Math.asin(Math.sin(A) * Math.cos(p) / Math.sin(c)), m = this.e * this.sin_p12 / Math.sqrt(1 - this.es), M = this.e * this.cos_p12 * Math.cos(c) / Math.sqrt(1 - this.es), f = m * M, d = M * M, g = x * x, v = g * x, P = v * x, b = P * x, _ = l * x * (1 - g * d * (1 - d) / 6 + v / 8 * f * (1 - 2 * d) + P / 120 * (d * (4 - 7 * d) - 3 * m * m * (1 - 7 * d)) - b / 48 * f), t.x = this.x0 + _ * Math.sin(c), t.y = this.y0 + _ * Math.cos(c), t))
    }, s.inverse = function (t) {
      t.x -= this.x0, t.y -= this.y0;
      var s, a, h, e, n, r, o, l, u, p, c, m, M, f, d, _, y, j, x, g, v, P, b;
      if (this.sphere) {
        if (s = Math.sqrt(t.x * t.x + t.y * t.y), s > 2 * i.HALF_PI * this.a) return;
        return a = s / this.a, h = Math.sin(a), e = Math.cos(a), n = this.long0, Math.abs(s) <= i.EPSLN ? r = this.lat0 : (r = i.asinz(e * this.sin_p12 + t.y * h * this.cos_p12 / s), o = Math.abs(this.lat0) - i.HALF_PI, n = Math.abs(o) <= i.EPSLN ? this.lat0 >= 0 ? i.adjust_lon(this.long0 + Math.atan2(t.x, -t.y)) : i.adjust_lon(this.long0 - Math.atan2(-t.x, t.y)) : i.adjust_lon(this.long0 + Math.atan2(t.x * h, s * this.cos_p12 * e - t.y * this.sin_p12 * h))), t.x = n, t.y = r, t
      }
      return l = i.e0fn(this.es), u = i.e1fn(this.es), p = i.e2fn(this.es), c = i.e3fn(this.es), Math.abs(this.sin_p12 - 1) <= i.EPSLN ? (m = this.a * i.mlfn(l, u, p, c, i.HALF_PI), s = Math.sqrt(t.x * t.x + t.y * t.y), M = m - s, r = i.imlfn(M / this.a, l, u, p, c), n = i.adjust_lon(this.long0 + Math.atan2(t.x, -1 * t.y)), t.x = n, t.y = r, t) : Math.abs(this.sin_p12 + 1) <= i.EPSLN ? (m = this.a * i.mlfn(l, u, p, c, i.HALF_PI), s = Math.sqrt(t.x * t.x + t.y * t.y), M = s - m, r = i.imlfn(M / this.a, l, u, p, c), n = i.adjust_lon(this.long0 + Math.atan2(t.x, t.y)), t.x = n, t.y = r, t) : (s = Math.sqrt(t.x * t.x + t.y * t.y), _ = Math.atan2(t.x, t.y), f = i.gN(this.a, this.e, this.sin_p12), y = Math.cos(_), j = this.e * this.cos_p12 * y, x = -j * j / (1 - this.es), g = 3 * this.es * (1 - x) * this.sin_p12 * this.cos_p12 * y / (1 - this.es), v = s / f, P = v - x * (1 + x) * Math.pow(v, 3) / 6 - g * (1 + 3 * x) * Math.pow(v, 4) / 24, b = 1 - x * P * P / 2 - v * P * P * P / 6, d = Math.asin(this.sin_p12 * Math.cos(P) + this.cos_p12 * Math.sin(P) * y), n = i.adjust_lon(this.long0 + Math.asin(Math.sin(_) * Math.sin(P) / Math.cos(d))), r = Math.atan((1 - this.es * b * this.sin_p12 / Math.sin(d)) * Math.tan(d) / (1 - this.es)), t.x = n, t.y = r, t)
    }, s.names = ["Azimuthal_Equidistant", "aeqd"]
  }), i("proj4/projCode/longlat", ["require", "exports", "module"], function (t, s) {
    function i(t) {
      return t
    }
    s.init = function () {}, s.forward = i, s.inverse = i, s.names = ["longlat", "identity"]
  }), i("proj4/projections", ["require", "exports", "module", "proj4/projCode/tmerc", "proj4/projCode/utm", "proj4/projCode/sterea", "proj4/projCode/stere", "proj4/projCode/somerc", "proj4/projCode/omerc", "proj4/projCode/lcc", "proj4/projCode/krovak", "proj4/projCode/cass", "proj4/projCode/laea", "proj4/projCode/merc", "proj4/projCode/aea", "proj4/projCode/gnom", "proj4/projCode/cea", "proj4/projCode/eqc", "proj4/projCode/poly", "proj4/projCode/nzmg", "proj4/projCode/mill", "proj4/projCode/sinu", "proj4/projCode/moll", "proj4/projCode/eqdc", "proj4/projCode/vandg", "proj4/projCode/aeqd", "proj4/projCode/longlat"], function (t, s) {
    function i(t, s) {
      var i = e.length;
      return t.names ? (e[i] = t, t.names.forEach(function (t) {
        h[t.toLowerCase()] = i
      }), this) : (console.log(s), !0)
    }
    var a = [t("proj4/projCode/tmerc"), t("proj4/projCode/utm"), t("proj4/projCode/sterea"), t("proj4/projCode/stere"), t("proj4/projCode/somerc"), t("proj4/projCode/omerc"), t("proj4/projCode/lcc"), t("proj4/projCode/krovak"), t("proj4/projCode/cass"), t("proj4/projCode/laea"), t("proj4/projCode/merc"), t("proj4/projCode/aea"), t("proj4/projCode/gnom"), t("proj4/projCode/cea"), t("proj4/projCode/eqc"), t("proj4/projCode/poly"), t("proj4/projCode/nzmg"), t("proj4/projCode/mill"), t("proj4/projCode/sinu"), t("proj4/projCode/moll"), t("proj4/projCode/eqdc"), t("proj4/projCode/vandg"), t("proj4/projCode/aeqd"), t("proj4/projCode/longlat")],
      h = {}, e = [];
    s.add = i, s.get = function (t) {
      if (!t) return !1;
      var s = t.toLowerCase();
      return "undefined" != typeof h[s] && e[h[s]] ? e[h[s]] : void 0
    }, s.start = function () {
      a.forEach(i)
    }
  }), i("proj4/Proj", ["require", "proj4/extend", "proj4/common", "proj4/defs", "proj4/constants", "proj4/datum", "proj4/projections", "proj4/wkt", "proj4/projString"], function (t) {
    function s(t) {
      if (!(this instanceof s)) return new s(t);
      this.srsCodeInput = t, this.x0 = 0, this.y0 = 0;
      var a;
      "string" == typeof t ? t in h ? (this.deriveConstants(h[t]), i(this, h[t])) : t.indexOf("GEOGCS") >= 0 || t.indexOf("GEOCCS") >= 0 || t.indexOf("PROJCS") >= 0 || t.indexOf("LOCAL_CS") >= 0 ? (a = o(t), this.deriveConstants(a), i(this, a)) : "+" === t[0] && (a = l(t), this.deriveConstants(a), i(this, a)) : (this.deriveConstants(t), i(this, t)), this.initTransforms(this.projName)
    }
    var i = t("proj4/extend"),
      a = t("proj4/common"),
      h = t("proj4/defs"),
      e = t("proj4/constants"),
      n = t("proj4/datum"),
      r = t("proj4/projections"),
      o = t("proj4/wkt"),
      l = t("proj4/projString");
    return s.projections = r, s.projections.start(), s.prototype = {
      initTransforms: function (t) {
        var a = s.projections.get(t);
        if (!a) throw "unknown projection " + t;
        i(this, a), this.init()
      },
      deriveConstants: function (t) {
        if (t.nadgrids && 0 === t.nadgrids.length && (t.nadgrids = null), t.nadgrids) {
          t.grids = t.nadgrids.split(",");
          var s = null,
            h = t.grids.length;
          if (h > 0)
            for (var r = 0; h > r; r++) {
              s = t.grids[r];
              var o = s.split("@");
              "" !== o[o.length - 1] && (t.grids[r] = {
                mandatory: 1 === o.length,
                name: o[o.length - 1],
                grid: e.grids[o[o.length - 1]]
              }, t.grids[r].mandatory && !t.grids[r].grid)
            }
        }
        if (t.datumCode && "none" !== t.datumCode) {
          var l = e.Datum[t.datumCode];
          l && (t.datum_params = l.towgs84 ? l.towgs84.split(",") : null, t.ellps = l.ellipse, t.datumName = l.datumName ? l.datumName : t.datumCode)
        }
        if (!t.a) {
          var u = e.Ellipsoid[t.ellps] ? e.Ellipsoid[t.ellps] : e.Ellipsoid.WGS84;
          i(t, u)
        }
        t.rf && !t.b && (t.b = (1 - 1 / t.rf) * t.a), (0 === t.rf || Math.abs(t.a - t.b) < a.EPSLN) && (t.sphere = !0, t.b = t.a), t.a2 = t.a * t.a, t.b2 = t.b * t.b, t.es = (t.a2 - t.b2) / t.a2, t.e = Math.sqrt(t.es), t.R_A && (t.a *= 1 - t.es * (a.SIXTH + t.es * (a.RA4 + t.es * a.RA6)), t.a2 = t.a * t.a, t.b2 = t.b * t.b, t.es = 0), t.ep2 = (t.a2 - t.b2) / t.b2, t.k0 || (t.k0 = 1), t.axis || (t.axis = "enu"), t.datum = n(t)
      }
    }, s
  }), i("proj4/datum_transform", ["require", "proj4/common"], function (t) {
    var s = t("proj4/common");
    return function (t, i, a) {
      function h(t) {
        return t === s.PJD_3PARAM || t === s.PJD_7PARAM
      }
      var e, n, r;
      if (t.compare_datums(i)) return a;
      if (t.datum_type === s.PJD_NODATUM || i.datum_type === s.PJD_NODATUM) return a;
      var o = t.a,
        l = t.es,
        u = i.a,
        p = i.es,
        c = t.datum_type;
      if (c === s.PJD_GRIDSHIFT)
        if (0 === this.apply_gridshift(t, 0, a)) t.a = s.SRS_WGS84_SEMIMAJOR, t.es = s.SRS_WGS84_ESQUARED;
        else {
          if (!t.datum_params) return t.a = o, t.es = t.es, a;
          for (e = 1, n = 0, r = t.datum_params.length; r > n; n++) e *= t.datum_params[n];
          if (0 === e) return t.a = o, t.es = t.es, a;
          c = t.datum_params.length > 3 ? s.PJD_7PARAM : s.PJD_3PARAM
        }
      return i.datum_type === s.PJD_GRIDSHIFT && (i.a = s.SRS_WGS84_SEMIMAJOR, i.es = s.SRS_WGS84_ESQUARED), (t.es !== i.es || t.a !== i.a || h(c) || h(i.datum_type)) && (t.geodetic_to_geocentric(a), h(t.datum_type) && t.geocentric_to_wgs84(a), h(i.datum_type) && i.geocentric_from_wgs84(a), i.geocentric_to_geodetic(a)), i.datum_type === s.PJD_GRIDSHIFT && this.apply_gridshift(i, 1, a), t.a = o, t.es = l, i.a = u, i.es = p, a
    }
  }), i("proj4/adjust_axis", [], function () {
    return function (t, s, i) {
      var a, h, e, n = i.x,
        r = i.y,
        o = i.z || 0;
      for (e = 0; 3 > e; e++)
        if (!s || 2 !== e || void 0 !== i.z) switch (0 === e ? (a = n, h = "x") : 1 === e ? (a = r, h = "y") : (a = o, h = "z"), t.axis[e]) {
        case "e":
          i[h] = a;
          break;
        case "w":
          i[h] = -a;
          break;
        case "n":
          i[h] = a;
          break;
        case "s":
          i[h] = -a;
          break;
        case "u":
          void 0 !== i[h] && (i.z = a);
          break;
        case "d":
          void 0 !== i[h] && (i.z = -a);
          break;
        default:
          return null
        }
        return i
    }
  }), i("proj4/transform", ["require", "proj4/common", "proj4/datum_transform", "proj4/adjust_axis", "proj4/Proj"], function (t) {
    var s = t("proj4/common"),
      i = t("proj4/datum_transform"),
      a = t("proj4/adjust_axis"),
      h = t("proj4/Proj");
    return function e(t, n, r) {
      function o(t, i) {
        return (t.datum.datum_type === s.PJD_3PARAM || t.datum.datum_type === s.PJD_7PARAM) && "WGS84" !== i.datumCode
      }
      var l;
      return t.datum && n.datum && (o(t, n) || o(n, t)) && (l = new h("WGS84"), e(t, l, r), t = l), "enu" !== t.axis && a(t, !1, r), "longlat" === t.projName ? (r.x *= s.D2R, r.y *= s.D2R) : (t.to_meter && (r.x *= t.to_meter, r.y *= t.to_meter), t.inverse(r)), t.from_greenwich && (r.x += t.from_greenwich), r = i(t.datum, n.datum, r), n.from_greenwich && (r.x -= n.from_greenwich), "longlat" === n.projName ? (r.x *= s.R2D, r.y *= s.R2D) : (n.forward(r), n.to_meter && (r.x /= n.to_meter, r.y /= n.to_meter)), "enu" !== n.axis && a(n, !0, r), r
    }
  }), i("proj4/core", ["require", "proj4/Point", "proj4/Proj", "proj4/transform"], function (t) {
    function s(t, s, i) {
      var h;
      return Array.isArray(i) ? (h = e(t, s, a(i)), 3 === i.length ? [h.x, h.y, h.z] : [h.x, h.y]) : e(t, s, i)
    }

    function i(t) {
      return t instanceof h ? t : t.oProj ? t.oProj : h(t)
    }
    var a = t("proj4/Point"),
      h = t("proj4/Proj"),
      e = t("proj4/transform"),
      n = h("WGS84");
    return function (t, a, h) {
      t = i(t);
      var e, r = !1;
      return "undefined" == typeof a ? (a = t, t = n, r = !0) : ("undefined" != typeof a.x || Array.isArray(a)) && (h = a, a = t, t = n, r = !0), a = i(a), h ? s(t, a, h) : (e = {
        forward: function (i) {
          return s(t, a, i)
        },
        inverse: function (i) {
          return s(a, t, i)
        }
      }, r && (e.oProj = a), e)
    }
  }), i("proj4/version", [], function () {
    return "1.4.1"
  }), i("proj4", ["require", "proj4/core", "proj4/Proj", "proj4/Point", "proj4/defs", "proj4/transform", "proj4/mgrs", "proj4/version"], function (t) {
    var s = t("proj4/core");
    return s.defaultDatum = "WGS84", s.Proj = t("proj4/Proj"), s.WGS84 = new s.Proj("WGS84"), s.Point = t("proj4/Point"), s.defs = t("proj4/defs"), s.transform = t("proj4/transform"), s.mgrs = t("proj4/mgrs"), s.version = t("proj4/version"), s
  }), s("proj4")
});