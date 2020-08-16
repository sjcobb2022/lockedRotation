function setLockedRotation() {
  cam.mouse.solveConstraint = function() {
    var dx = this.dist[0];
    var dy = this.dist[1];

    // YAW, PITCH
    if (!cam.SHIFT_CONSTRAINT && Math.abs(dx - dy) > 1) {
      cam.SHIFT_CONSTRAINT = Math.abs(dx) > Math.abs(dy) ? cam.AXIS.YAW : cam.AXIS.PITCH;
    }

    // define constraint by increasing priority
    cam.DRAG_CONSTRAINT = cam.AXIS.ALL;
    if (cam.FIXED_CONSTRAINT) cam.DRAG_CONSTRAINT = cam.FIXED_CONSTRAINT;
    if (cam.SHIFT_CONSTRAINT) cam.DRAG_CONSTRAINT = cam.SHIFT_CONSTRAINT;
  }
}

function setLockedRotationShift() {
  cam.mouse.solveConstraint = function() {
    var dx = this.dist[0];
    var dy = this.dist[1];

    // YAW, PITCH
    if (!this.shiftKey && !cam.SHIFT_CONSTRAINT && Math.abs(dx - dy) > 1) {
      cam.SHIFT_CONSTRAINT = Math.abs(dx) > Math.abs(dy) ? cam.AXIS.YAW : cam.AXIS.PITCH;
    }

    // define constraint by increasing priority
    cam.DRAG_CONSTRAINT = cam.AXIS.ALL;
    if (cam.FIXED_CONSTRAINT) cam.DRAG_CONSTRAINT = cam.FIXED_CONSTRAINT;
    if (cam.SHIFT_CONSTRAINT) cam.DRAG_CONSTRAINT = cam.SHIFT_CONSTRAINT;
  }
}