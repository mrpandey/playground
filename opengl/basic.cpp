#include<iostream>
#include<GL/glut.h>

void init() {
    glClearColor(0.1, 0.1, 0.1, 0.0);
    glMatrixMode(GL_PROJECTION);
    gluOrtho2D(0.0, 400.0, 0.0, 400.0);
}

void lineSegment() {
    glClear(GL_COLOR_BUFFER_BIT);

    glColor3f(0.56, 0.56, 0.0);
    glBegin(GL_LINES);
        glVertex2i(20, 40);
        glVertex2i(380, 360);
    glEnd();

    glFlush();
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowPosition(50, 100);
    glutInitWindowSize(400, 400);
    glutCreateWindow("Just a line");

    init();
    glutDisplayFunc(lineSegment);
    glutMainLoop();

    return 0;
}
